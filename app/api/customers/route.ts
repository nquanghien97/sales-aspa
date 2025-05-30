import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/token";

export async function POST(req: NextRequest) {
  const { province, district, ward, address, fullName, job } = await req.json();
  if (!province || !fullName || !job) {
    return NextResponse.json({
      success: false,
      message: "Vui lòng nhập đầy đủ thông tin"
    }, { status: 400 });
  }

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

    if (user.user_role !== 'ADMIN') {
      return NextResponse.json({
        success: false,
        message: "Bạn không có quyền tạo tài khoản"
      }, { status: 403 });
    }

    await prisma.customers.create({
      data: {
        province, district, ward, address, fullName, job
      }
    })

    return NextResponse.json({
      success: true,
      message: "Tạo khách hàng thành công",
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
  const search = url.searchParams.get('search') || '';

  const page = pageParam ? parseInt(pageParam, 10) : null;
  const pageSize = pageSizeParam ? parseInt(pageSizeParam, 10) : null;

  let skip: number | undefined;
  let take: number | undefined;

  if (page !== null && pageSize !== null) {
    skip = (page - 1) * pageSize;
    take = pageSize;
  }
  const whereCondition = {
    ...(search && {
      OR: [
        { fullName: { contains: search } },
        { province: { contains: search } }
      ],
    }),
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

    const listCustomers = await prisma.customers.findMany({
      where: {
        ...whereCondition,
      },
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      },
    })
    const total = await prisma.customers.count({
      where: {
        ...whereCondition,
      }
    })
    return NextResponse.json({
      success: true,
      customers: listCustomers,
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
