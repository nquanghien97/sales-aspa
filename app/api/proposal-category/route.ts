import prisma from "@/lib/db";
import { verifyToken } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  try {
    const { keyword, category, content, proposalId } = await req.json();
    if (!keyword || !category) {
      return NextResponse.json({
        success: false,
        message: "Vui lòng nhập đầy đủ thông tin"
      }, { status: 400 });
    }
    const authorization = req.headers.get('authorization');
    const token = authorization?.split(' ')[1];
    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Phiên làm việc đã hết hạn, vui lòng đăng nhập lại."
      }, { status: 401 });
    }
    const user = await verifyToken(token)
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Phiên làm việc đã hết hạn, vui lòng đăng nhập lại."
      }, { status: 401 });
    }
    if (user.user_role !== 'ADMIN') {
      return NextResponse.json({
        success: false,
        message: "Bạn không có quyền tạo đề xuất"
      }, { status: 403 });
    }

    await prisma.$transaction(async (tx) => {
      const categoryData = await tx.category.create({
        data: {
          keyword,
          category,
          authorId: Number(user.user_id),
          content
        }
      })
      await tx.proposal.update({
        where: { id: proposalId },
        data: {
          status: "APPROVED",
          categoryId: categoryData.id
        }
      })
    })

    return NextResponse.json({
      success: true,
      message: "Tạo data thành công",
    }, { status: 200 });

  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({
        success: false,
        message: "Server error, please try again.",
        error: err.message,
      }, { status: 500 });
    }
  }
}