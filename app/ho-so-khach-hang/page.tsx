'use client'

import { Button } from '@/components/ui/Button';
import { Checkbox, Form, Input, Select } from 'antd';
import React, { useState } from 'react'
import HeightChart from './height-chart';

enum Gender {
  BOY = "BOY",
  GIRL = 'GIRL'
}

export interface DataSubmit {
  currentHeight: number;
  currentWeight: number
  gender: Gender
  currentAge: number
  currentFatherHeight: number
  currentMotherHeight: number
}

function CustomerProfile() {
  const [puberty, setPuberty] = useState<'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined>()
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentFatherHeight, setCurrentFatherHeight] = useState('');
  const [currentMotherHeight, setCurrentMotherHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.BOY);
  const [currentAge, setCurrentAge] = useState('');
  const [isShowResults, setIsShowResults] = useState(false);

  const [isOpenHeightChart, setIsOpenHeightChart] = useState(false);

  const [form] = Form.useForm();

  const handleCheckboxChange = (value: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty') => {
    setPuberty(value);
  }

  const handleSubmit = (data: DataSubmit) => {
    console.log(data);
    setIsShowResults(true)
  }

  return (
    <>
      <HeightChart
        open={isOpenHeightChart}
        onCancel={() => setIsOpenHeightChart(false)}
        data={{
          currentHeight: Number(currentHeight),
          currentFatherHeight: Number(currentFatherHeight),
          currentMotherHeight: Number(currentMotherHeight),
          currentWeight: Number(currentWeight),
          gender,
          currentAge: Number(currentAge)
        }}
      />
      <div className="p-4">
        <h1 className="text-center text-4xl font-bold mb-4 py-4">HỒ SƠ KHÁCH HÀNG</h1>
        <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
          <h2 className="mb-4 text-xl">Nhập thông tin khách hàng</h2>
          <Form form={form} onFinish={handleSubmit} className="flex gap-4 items-center">
            <div className="flex flex-wrap">
              <Form.Item
                label={<p className="min-w-[120px]">Chiều cao bé (cm)</p>}
                className="flex flex-col w-1/3 px-2"
                name="currentHeight"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Input
                  placeholder='Chiều cao (cm)'
                  onChange={(e) => setCurrentHeight(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={<p className="min-w-[120px]">Chiều cao bố (cm)</p>}
                className="flex flex-col w-1/3 px-2"
                name="currentFatherHeight"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Input
                  placeholder='Chiều cao bố (cm)'
                  onChange={(e) => setCurrentFatherHeight(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={<p className="min-w-[120px]">Chiều cao mẹ (cm)</p>}
                className="flex flex-col w-1/3 px-2"
                name="currentMotherHeight"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Input
                  placeholder='Chiều cao mẹ (cm)'
                  onChange={(e) => setCurrentMotherHeight(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={<p className="min-w-[120px]">Cân nặng (kg)</p>}
                className="flex flex-col w-1/3 px-2"
                name="currentWeight"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Input
                  placeholder='Cân nặng (kg)'
                  onChange={(e) => setCurrentWeight(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label={<p className="min-w-[120px]">Giới tính</p>}
                className="flex flex-col w-1/3 px-2"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Select
                  options={[{ label: 'Nam', value: 'BOY' }, { label: 'Nữ', value: 'GIRL' }]}
                  placeholder='Giới tính'
                  onChange={(e) => setGender(e as Gender)}
                />
              </Form.Item>
              <Form.Item
                label={<p className="min-w-[120px]">Số tuổi</p>}
                className="flex flex-col w-1/3 px-2"
                name="currentAge"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Input
                  placeholder='Số tuổi'
                  onChange={(e) => setCurrentAge(e.target.value)}
                />
              </Form.Item>
            </div>
            <Form.Item
              name="puberty"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <div className="flex flex-col gap-2 w-1/3">
                <div className="flex gap-2 w-[140px] items-center">
                  <p className="text-[#2563eb] w-full">0 - 2 tuổi</p>
                  <Checkbox
                    checked={puberty === 'infant'}
                    onChange={() => handleCheckboxChange('infant')}
                  />
                </div>
                <div className="flex gap-2 w-[140px] items-center">
                  <p className="text-[#2563eb] w-full">Chưa dậy thì</p>
                  <Checkbox
                    checked={puberty === 'pre-puberty'}
                    onChange={() => handleCheckboxChange('pre-puberty')}
                  />
                </div>
                <div className="flex gap-2 w-[140px] items-center">
                  <p className="text-[#2563eb] w-full">Đang dậy thì</p>
                  <Checkbox
                    checked={puberty === 'puberty'}
                    onChange={() => handleCheckboxChange('puberty')}
                  />
                </div>
                <div className="flex gap-2 w-[140px] items-center">
                  <p className="text-[#2563eb] w-full">Đã dậy thì</p>
                  <Checkbox
                    checked={puberty === 'post-puberty'}
                    onChange={() => handleCheckboxChange('post-puberty')}
                  />
                </div>
              </div>
            </Form.Item>
            <Button variant='primary' type='submit'>Xác nhận</Button>
          </Form>
        </div>
        {isShowResults && (
          <div className="flex gap-4">
            <div>
              <Button variant='primary' onClick={() => setIsOpenHeightChart(true)}>Xem phác đồ dự đoán chiều cao</Button>
            </div>
            <div>
              <Button variant='primary'>Xem quá trình trưởng thành của bé</Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CustomerProfile

