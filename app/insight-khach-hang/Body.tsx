import React, { JSX } from 'react';
import FilesIcon from '@/assets/icons/FilesIcon';
import ClipboardCheckIcon from '@/assets/icons/ClipboardCheckIcon';
import LightIcon from '@/assets/icons/LightIcon';
import { AgeType, TimeType } from './types';

interface BodyProps {
  elementRef?: React.RefObject<HTMLDivElement | null>
  content: {
    customer_status?: JSX.Element;
    conclude?: JSX.Element;
    solution?: JSX.Element;
  } | undefined
  age?: AgeType
  time?: TimeType
}

function Body(props: BodyProps) {
  const {
    elementRef,
    content,
    age,
    time
  } = props;

  return (
    (age && time && content) && (
      <div className="p-6 bg-gradient-to-br from-rose-50 to-white" ref={elementRef}>
        <h1 className="text-3xl font-bold text-rose-800 mb-8 text-center">Đánh Giá & Giải Pháp Chăm Sóc Da</h1>

        <div className="space-y-8">
          {/* Đánh giá tình trạng */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center bg-rose-700 text-white p-4">
              <FilesIcon className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">1. Đánh giá tình trạng</h2>
            </div>
            {content?.customer_status}
          </div>

          {/* Kết luận */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center bg-amber-600 text-white p-4">
              <ClipboardCheckIcon className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">2. Kết luận</h2>
            </div>
            {content?.conclude}
          </div>

          {/* Giải pháp */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center bg-emerald-700 text-white p-4">
              <LightIcon className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">3. Giải Pháp</h2>
            </div>
            {content?.solution}
          </div>
        </div>
      </div>
    )
  )
}

export default Body