'use client'

import React, { useEffect, useState } from 'react'
import withAuth from '@/hocs/withAuth'
import Header from './Header'
import Body from './Body'
import Document from './Documents'
import { getCustomerInsight } from '@/services/customer-insight'
import { CustomerInsightEntity } from '@/entities/customer-insight'
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from '@prisma/client'
import { Button } from '@/components/ui/Button'
import Create from './actions/Create'
import Update from './actions/Update'

function Content() {
  const [age, setAge] = useState<CUSTOMER_INSIGHT_AGE>();
  const [time, setTime] = useState<CUSTOMER_INSIGHT_TIME>();
  const [datas, setDatas] = useState<CustomerInsightEntity[]>([]);
  const [isOpenDocument, setIsOpenDocument] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [refreshKey, setRefreshKey] = useState(false)

  useEffect(() => {
    document.title = "INSIGHT KHÁCH HÀNG"
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCustomerInsight({})
        setDatas(res.data);
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    })()
  }, [refreshKey])

  const filterData = (age: CUSTOMER_INSIGHT_AGE, time: CUSTOMER_INSIGHT_TIME) => {
    return datas.filter(data => data.age === age && data.time === time)
  }

  return (
    <div className="p-4">
      <Create open={isOpenCreate} onClose={() => setIsOpenCreate(false)} setRefreshKey={setRefreshKey} />
      <Update open={isOpenUpdate} onClose={() => setIsOpenUpdate(false)} setRefreshKey={setRefreshKey} data={age && time && filterData(age, time)[0]} />
      <Document open={isOpenDocument} onClose={() => setIsOpenDocument(false)} />
      <div className="flex items-center mb-4">
        {/* <div>
          <Button type='primary' onClick={() => setIsOpenDocument(true)}>Xem tài liệu</Button>
        </div> */}
        <div className="mb-2">
          <Button variant='primary' onClick={() => setIsOpenCreate(true)}>Thêm mới</Button>
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold py-4">INSIGHT KHÁCH HÀNG</h1>
        </div>
      </div>
      <Header
        age={age}
        setAge={setAge}
        time={time}
        setTime={setTime}
      />

      <Body
        content={age && time && filterData(age, time)[0]}
        age={age}
        time={time}
        setIsOpenUpdate={setIsOpenUpdate}
      />
    </div>
  )
}

const ContentWithAuth = withAuth(Content)

export default ContentWithAuth