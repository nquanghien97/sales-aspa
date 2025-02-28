import prisma from "@/lib/db";
import { verifyToken } from "@/lib/token";
import { PROPOSAL_STATUS } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  try {
    const { keyword, category } = await req.json();
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

    await prisma.proposal.create({
      data: {
        keyword,
        categoryType: category,
        authorId: Number(user.user_id),
      }
    })

    return NextResponse.json({
      success: true,
      message: "Tạo đề xuất thành công",
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

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pageParam = url.searchParams.get('page');
  const pageSizeParam = url.searchParams.get('pageSize')
  const keyword = url.searchParams.get('keyword') || '';
  const status = url.searchParams.get('status')

  const page = pageParam ? parseInt(pageParam, 10) : null;
  const pageSize = pageSizeParam ? parseInt(pageSizeParam, 10) : null;

  let skip: number | undefined;
  let take: number | undefined;

  if (page !== null && pageSize !== null) {
    skip = (page - 1) * pageSize;
    take = pageSize;
  }
  const whereCondition = {
    keyword: {
      contains: keyword.toLowerCase(),
    },
    ...(status === "ALL" ? {} : { status: status as PROPOSAL_STATUS || PROPOSAL_STATUS.PENDING })
  };

  try {
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

    const data = await prisma.proposal.findMany({
      where: {
        ...whereCondition,
      },
      include: {
        author: {
          select: {
            id: true,
            fullName: true
          }
        },
      },
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      }
    })

    const total = await prisma.proposal.count({
      where: {
        ...whereCondition
      }
    })
    return NextResponse.json({
      success: true,
      data,
      total
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