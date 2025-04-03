'use client'

import React, { useState } from 'react'
import Create from './actions/Create'
import { Button, Form, Select } from 'antd'
import { data_milk } from './data_milk'
import { options_keyword } from './options_keyword'

interface HeaderProps {
  setSearchParams: React.Dispatch<React.SetStateAction<{
    page?: number;
    pageSize?: string;
    search?: string;
  }>>
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  setMilk: React.Dispatch<React.SetStateAction<string | undefined>>
}

const excludeCases = [
  'Viên GH của Nhật (GH Creation EX, Tall Plus,...) – Phân khúc cao cấp (~1,2 - 1,8 triệu/lọ)',
  'Bé dùng sữa tươi',
  'Bé đang ko dùng sản phẩm nào để tăng chiều cao cả',
  'Bé đã dùng nhiều sản phẩm nhưng chưa hiệu quả'
]

function Header(props: HeaderProps) {
  const { setSearchParams, setRefreshKey, setMilk } = props;
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const [form] = Form.useForm();

  const onSubmit = (data: { keyword: string, milk: string }) => {
    if (excludeCases.includes(data.milk)) {
      setSearchParams(pre => ({
        ...pre,
        search: data.milk
      }))
    } else {
      setSearchParams(pre => ({
        ...pre,
        search: data.keyword
      }))
    }

    setMilk(data.milk)
    setRefreshKey(pre => !pre)
  }

  const handleValuesChange = (_: string, allValues: { milk?: string }) => {
    setIsRequired(!excludeCases.includes(allValues.milk || ''))
    form.validateFields(['keyword'])
  }

  return (
    <>
      {<Create open={isOpenCreate} onClose={() => setIsOpenCreate(false)} setRefreshKey={setRefreshKey} />}
      <div className="mb-2">
        <Form
          form={form}
          onFinish={onSubmit}
          onValuesChange={handleValuesChange}
          className="flex gap-2 items-start py-4"
        >
          <div className="flex items-center w-full">
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="milk"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp="label"
                options={data_milk.map(milk => ({ label: milk.name, value: milk.name }))}
                onChange={() => form.setFieldsValue({ keyword: null })}
                placeholder="Loại sữa đang dùng"
              />
            </Form.Item>
          </div>
          <div className="flex items-center w-full">
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="keyword"
              rules={[
                {
                  required: isRequired,
                  message: "Sản phẩm sữa này cần chọn loại trường hợp"
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp="label"
                className="flex-1"
                options={options_keyword}
                placeholder="Trường hợp"
              />
            </Form.Item>
          </div>
          <div className="flex items-center justify-center">
            <Button htmlType="submit" type='primary'>
              Tìm kiếm
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Header
