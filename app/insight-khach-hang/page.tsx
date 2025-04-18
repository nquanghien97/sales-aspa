'use client'

import React, { JSX, useEffect, useState } from 'react'
import withAuth from '@/hocs/withAuth'
import Header from './Header'
import Body from './Body'
import Document from './Documents'
import { CustomerCaseTye } from './types'

function Content() {
  const [customerCase, setCustomerCase] = useState<CustomerCaseTye>();
  const [content, setContent] = useState<{
    customer_status?: JSX.Element;
    conclude?: JSX.Element;
    solution?: JSX.Element;
}>()

  const [isOpenDocument, setIsOpenDocument] = useState(false);

  useEffect(() => {
    document.title = "INSIGHT KHÁCH HÀNG"
  }, []);

  return (
    <div className="p-4">
      <Document open={isOpenDocument} onClose={() => setIsOpenDocument(false)} />
      <div className="flex items-center mb-4">
        {/* <div>
          <Button type='primary' onClick={() => setIsOpenDocument(true)}>Xem tài liệu</Button>
        </div> */}
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold py-4">INSIGHT KHÁCH HÀNG</h1>
        </div>
      </div>

      <Header
        setCustomerCase={setCustomerCase}
        customerCase={customerCase}
        setContent={setContent}
      />

      <Body
        content={content}
        customerCase={customerCase}
      />
    </div>
  )
}

const ContentWithAuth = withAuth(Content)

export default ContentWithAuth