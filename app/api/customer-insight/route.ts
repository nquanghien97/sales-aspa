import prisma from "@/lib/db";
import { verifyToken } from "@/lib/token";
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { time, age, customerStatus, conclude, solution } = await req.json()

    if (!age || !time || !customerStatus || !conclude || !solution) {
      return NextResponse.json({ message: 'Thiếu dữ liệu đầu vào' }, { status: 400 });
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
        message: "Bạn không có quyền"
      }, { status: 403 });
    }

    const existing = await prisma.customer_insight.findUnique({
      where: {
        unique_age_time: {
          age,
          time
        }
      }
    })

    if (existing) {
      return NextResponse.json({
        success: false,
        message: "Trường hợp này đã tồn tại",
      }, { status: 409 })
    }

    await prisma.customer_insight.create({
      data: {
        age,
        time,
        customerStatus,
        conclude,
        solution
      }
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

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const age = searchParams.get('age');
    const time = searchParams.get('time');

    // Tạo điều kiện lọc động
    const whereCondition = {
      ...(age && { age } as { age: CUSTOMER_INSIGHT_AGE }),
      ...(time && { time } as { time: CUSTOMER_INSIGHT_TIME }),
    };

    const results = await prisma.customer_insight.findMany({
      where: whereCondition,
      orderBy: { createdAt: 'desc' }, // sắp xếp theo thời gian cập nhật mới nhất
    });

    return NextResponse.json({ data: results });
  } catch (error) {
    console.error('Lỗi khi lấy danh sách:', error);
    return NextResponse.json({ message: 'Lỗi server' }, { status: 500 });
  }
}