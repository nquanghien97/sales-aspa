'use client'

import React, { JSX, ReactNode, useEffect, useState } from 'react'
import { data_height } from '@/constants/data'
import { Gender } from './data_config'
import withAuth from '@/hocs/withAuth'
import Header from './Header'
import Body from './Body'

function Content() {
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>();
  const [currentAge, setCurrentAge] = useState('');
  const [dataResponseHeight, setDataResponseHeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [dataResponseWeight, setDataResponseWeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [puberty, setPuberty] = useState<'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined>()

  useEffect(() => {
    document.title = "Kịch bản tư vấn"
  }, []);

  const heightBelowStandard = data_height?.[gender!]?.[+currentAge] - 2
  const heightAboveStandard = data_height?.[gender!]?.[+currentAge] + 2

  const BMI = (Number(currentWeight)) / ((Number(currentHeight) / 100) * (Number(currentHeight) / 100))

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold mb-4 py-4">INSIGHT CỦA BÉ</h1>

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