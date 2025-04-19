import React from 'react';
import FilesIcon from '@/assets/icons/FilesIcon';
import ClipboardCheckIcon from '@/assets/icons/ClipboardCheckIcon';
import LightIcon from '@/assets/icons/LightIcon';
import { CustomerInsightEntity } from '@/entities/customer-insight';
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from '@prisma/client';
import { Button } from '@/components/ui/Button';

interface BodyProps {
  elementRef?: React.RefObject<HTMLDivElement | null>
  content?: CustomerInsightEntity
  age?: CUSTOMER_INSIGHT_AGE
  time?: CUSTOMER_INSIGHT_TIME
  setIsOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

function Body(props: BodyProps) {
  const {
    elementRef,
    content,
    age,
    time,
    setIsOpenUpdate
  } = props;

  if (!age || !time) {
    return (
      <p className="text-center">Vui lòng chọn thông tin khách hàng</p>
    )
  }

  return (
    (content) ? (
      <div className="relative">

        <div className="p-6 bg-gradient-to-br from-rose-50 to-white" ref={elementRef}>
          <div className="flex items-center mb-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-rose-800 text-center">Đánh Giá & Giải Pháp Chăm Sóc Da</h2>
            </div>
            <div className="" onClick={() => setIsOpenUpdate(true)}>
              <Button variant='primary'>Chỉnh sửa</Button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Đánh giá tình trạng */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center bg-rose-700 text-white p-4">
                <FilesIcon className="h-6 w-6 mr-2" />
                <h2 className="text-xl font-semibold">1. Đánh giá tình trạng</h2>
              </div>
              <div className="p-4" dangerouslySetInnerHTML={{ __html: content?.customerStatus }} />
            </div>

            {/* Kết luận */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center bg-amber-600 text-white p-4">
                <ClipboardCheckIcon className="h-6 w-6 mr-2" />
                <h2 className="text-xl font-semibold">2. Kết luận</h2>
              </div>
              <div className="p-4" dangerouslySetInnerHTML={{ __html: content?.conclude }} />
            </div>

            {/* Giải pháp */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center bg-emerald-700 text-white p-4">
                <LightIcon className="h-6 w-6 mr-2" />
                <h2 className="text-xl font-semibold">3. Giải Pháp</h2>
              </div>
              <div className="p-4" dangerouslySetInnerHTML={{ __html: content?.solution }} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p className="text-center">Không có dữ liệu phù hợp với trường hợp này</p>
    )
  )
}

export default Body