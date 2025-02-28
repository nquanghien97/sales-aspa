'use client'

import SearchIcon from '@/assets/icons/SearchIcon'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import React, { useState } from 'react'
import Create from './actions/Create'
import { UserParams } from '@/dto/user'
import { Form, Radio, RadioChangeEvent } from 'antd'

interface HeaderProps {
  setSearchParams: React.Dispatch<React.SetStateAction<UserParams>>
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: HeaderProps) {
  const { setSearchParams, setRefreshKey } = props;
  const [inputValue, setInputValue] = useState('');
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [status, setStatus] = useState('PENDING')

  const handleChange = (e: RadioChangeEvent) => {
    setStatus(e.target.value);
    setSearchParams(pre => ({
      ...pre,
      status: e.target.value
    }))
  };

  const onSearch = () => {
    setSearchParams(pre => ({
      ...pre,
      search: inputValue
    }))
    setRefreshKey(pre => !pre)
  }
  return (
    <>
      {<Create open={isOpenCreate} onClose={() => setIsOpenCreate(false)} setRefreshKey={setRefreshKey} />}
      <div className="mb-2 w-1/2">
        <div className="mb-2">
          <Button variant='primary' onClick={() => setIsOpenCreate(true)}>Thêm mới</Button>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 w-full">
            <Input
              placeholder='Tìm kiếm từ khóa'
              icon={<SearchIcon />}
              className="w-full"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button variant='primary' onClick={onSearch}>Tìm kiếm</Button>
          </div>
          <Form className="flex w-full">
            <Form.Item
              label="Chọn trạng thái"
              className="w-full flex items-center !mb-0"
            >
              <Radio.Group onChange={handleChange} value={status}>
                <Radio value="ALL">Tất cả</Radio>
                <Radio value="PENDING">Chờ duyệt</Radio>
                <Radio value="APPROVED">Đã duyệt</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Header