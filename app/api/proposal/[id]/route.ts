import prisma from "@/lib/db";
import { verifyToken } from "@/lib/token";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ id: number }> }) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({
      success: false,
      message: "Missing id"
    }, { status: 403 });

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
        message: "Bạn không có quyền"
      }, { status: 403 });
    }

    const data = await prisma.proposal.findUnique({
      where: {
        id: +id
      }
    })
    return NextResponse.json({
      success: true,
      data,
      message: "Lấy data thành công",
    });
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

export async function PUT(req: Request, { params }: { params: Promise<{ id: number }> }) {
  try {
    const { id } = await params;

    const { keyword } = await req.json();

    if (!id) return NextResponse.json({
      success: false,
      message: "Missing id"
    }, { status: 403 });

    if (!keyword) {
      return NextResponse.json(
        { success: false, message: "Thiếu dữ liệu bắt buộc." },
        { status: 400 }
      );
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

    const existProposal = await prisma.proposal.findUnique({
      where: {
        id: +id
      }
    })

    if (!existProposal) {
      return NextResponse.json({
        success: false,
        message: "Đề xuất không tồn tại."
      }, { status: 404 });
    }

    if (Number(user.user_id) !== existProposal.authorId && user.user_role !== 'ADMIN') {
      return NextResponse.json({
        success: false,
        message: "Bạn không có quyền chỉnh sửa"
      }, { status: 403 });
    }

    await prisma.proposal.update({
      where: {
        id: +id
      },
      data: {
        keyword,
      }
    })

    return NextResponse.json({
      success: true,
      message: "Cập nhật thành công",
    });
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

export async function DELETE(req: Request, { params }: { params: Promise<{ id: number }> }) {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({
      success: false,
      message: "Missing id"
    }, { status: 403 });

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

    const existProposal = await prisma.proposal.findUnique({
      where: {
        id: +id
      }
    })
    if (!existProposal) {
      return NextResponse.json({
        success: false,
        message: "Đề xuất không tồn tại."
      }, { status: 404 });
    }

    if (Number(user.user_id) !== existProposal.authorId && user.user_role !== 'ADMIN') {
      return NextResponse.json({
        success: false,
        message: "Bạn không có quyền xóa đề xuất"
      }, { status: 403 });
    }

    await prisma.proposal.delete({
      where: {
        id: +id
      }
    })
    return NextResponse.json({
      success: true,
      message: "Xóa thành công",
    });
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