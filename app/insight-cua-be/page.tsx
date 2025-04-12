'use client'

import React, { JSX, ReactNode, useEffect, useState } from 'react'
import { data_height } from '@/constants/data'
import { Gender } from './data_config'
import withAuth from '@/hocs/withAuth'
import Header from './Header'
import Body from './Body'
import { Button } from 'antd'
import Document from './Documents'

function Content() {
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>();
  const [currentAge, setCurrentAge] = useState('');
  const [dataResponseHeight, setDataResponseHeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [dataResponseWeight, setDataResponseWeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [puberty, setPuberty] = useState<'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined>();

  const [isOpenDocument, setIsOpenDocument] = useState(false);

  useEffect(() => {
    document.title = "Kịch bản tư vấn"
  }, []);

  const heightBelowStandard = data_height?.[gender!]?.[+currentAge] - 2
  const heightAboveStandard = data_height?.[gender!]?.[+currentAge] + 2

  const BMI = (Number(currentWeight)) / ((Number(currentHeight) / 100) * (Number(currentHeight) / 100))

  return (
    <div className="p-4">
      <Document open={isOpenDocument} onClose={() => setIsOpenDocument(false)} />
      <div className="flex items-center mb-4">
        <div>
          <Button type='primary' onClick={() => setIsOpenDocument(true)}>Xem tài liệu</Button>
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl font-bold py-4">INSIGHT CỦA BÉ</h1>
        </div>
      </div>

      <Header
        setCurrentHeight={setCurrentHeight}
        setCurrentWeight={setCurrentWeight}
        setGender={setGender}
        setCurrentAge={setCurrentAge}
        setPuberty={setPuberty}
        setDataResponseHeight={setDataResponseHeight}
        setDataResponseWeight={setDataResponseWeight}
        currentHeight={currentHeight}
        currentAge={currentAge}
        gender={gender}
        heightAboveStandard={heightAboveStandard}
        heightBelowStandard={heightBelowStandard}
        BMI={BMI}
        puberty={puberty}
        currentWeight={currentWeight}
        
      />

      <Body
        dataResponseHeight={dataResponseHeight}
        dataResponseWeight={dataResponseWeight}
        gender={gender}
        currentHeight={currentHeight}
        currentAge={currentAge}
        currentWeight={currentWeight}
        BMI={BMI}
        puberty={puberty}
        heightBelowStandard={heightBelowStandard}
        heightAboveStandard={heightAboveStandard}
      />
    </div>
  )
}

const ContentWithAuth = withAuth(Content)

export default ContentWithAuth