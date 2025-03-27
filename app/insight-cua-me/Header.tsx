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
  setMilkId: React.Dispatch<React.SetStateAction<number | undefined>>
}

function Header(props: HeaderProps) {
  const { setSearchParams, setRefreshKey, setMilkId } = props;
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const [form] = Form.useForm();

  const onSubmit = (data: { keyword: string, milkId: number }) => {
    setSearchParams(pre => ({
      ...pre,
      search: data.keyword
    }))
    setMilkId(data.milkId)
    setRefreshKey(pre => !pre)
  }
  return (
    <>
      {<Create open={isOpenCreate} onClose={() => setIsOpenCreate(false)} setRefreshKey={setRefreshKey} />}
      <div className="mb-2">
        <div className="mb-2">
          <Button type='primary' onClick={() => setIsOpenCreate(true)}>Thêm mới</Button>
        </div>
        <Form form={form} onFinish={onSubmit} className="flex gap-2 items-start py-4">
          <div className="flex items-center w-full">
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="milkId"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Select options={data_milk.map(milk => ({ label: milk.name, value: milk.id }))} placeholder="Loại sữa đang dùng" />
            </Form.Item>
          </div>
          <div className="flex items-center w-full">
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="keyword"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Select className="flex-1" options={options_keyword} placeholder="Trường hợp" />
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