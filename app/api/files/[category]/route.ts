import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/token';
import { FILE_CATEGORY } from '@prisma/client';
import { uploadFile } from '@/utils/fileUpload';
import prisma from '@/lib/db';

const folderName: Record<FILE_CATEGORY, string> = {
  SALES_POLICY: 'sales-policy',
  PRODUCTS: 'products',
  PRODUCT_DOCUMENTS: 'product-documents',
  FEEDBACKS: 'feedbacks',
}
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params as unknown as { category: FILE_CATEGORY };
    const formData = await req.formData();
    const data = formData.getAll(category) as File[];
    const slug = formData.get('slug') as string

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

    const fileNames = await uploadFile(data, folderName[category]);

    const dataFiles = () => {
      return fileNames.map(filename => ({
        url: filename.filename,
        type: filename.type,
        category,
        fileName: filename.fileName,
        fileCategorySlug: slug,
        authorId: Number(user.user_id)
      }))
    }

    if (dataFiles().length > 0) {
      await prisma.files.createMany({ data: dataFiles() })
    }

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
