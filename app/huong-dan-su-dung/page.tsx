'use client'

import Image from "next/image"
import { useEffect } from "react";

function HDSD() {

  useEffect(() => {
      document.title = "HƯỚNG DẪN SỬ DỤNG"
    }, []);

  return (
    <div className="w-full flex justify-center py-8">
      <Image src="/huong-dan-su-dung.jpg" alt="huong-dan-su-dung" width={3000} height={3000} className="w-1/2" />
    </div>
  )
}

export default HDSD