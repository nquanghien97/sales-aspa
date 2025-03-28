'use client'

import SearchIcon from '@/assets/icons/SearchIcon'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import React, { useState } from 'react'
import { UserParams } from '@/dto/user'
import CreateCustomer from './actions/CreateCustomer'
import CreateBulkCustomers from './actions/CreateBulkCustomers'

interface HeaderProps {
  setSearchParams: React.Dispatch<React.SetStateAction<UserParams>>
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: HeaderProps) {
  const { setSearchParams, setRefreshKey } = props;
  const [inputValue, setInputValue] = useState('');
  const [isOpenCreateUser, setIsOpenCreateUser] = useState(false);

  const onSearch = () => {
    setSearchParams(pre => ({
      ...pre,
      search: inputValue
    }))
    setRefreshKey(pre => !pre)
  }
  return (
    <>
      <CreateCustomer open={isOpenCreateUser} onClose={() => setIsOpenCreateUser(false)} setRefreshKey={setRefreshKey} />
      <div className="mb-2">
        <div className="mb-2 flex gap-2">
          <Button variant='primary' onClick={() => setIsOpenCreateUser(true)}>Thêm mới</Button>
          <CreateBulkCustomers setRefreshKey={setRefreshKey} />
        </div>
        <div className="flex items-center gap-2 w-full">
          <Input
            placeholder='Tìm kiếm tài khoản, tên'
            icon={<SearchIcon />}
            className="w-1/2"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button variant='primary' onClick={onSearch}>Tìm kiếm</Button>
        </div>
      </div>
    </>
  )
}

export default Header