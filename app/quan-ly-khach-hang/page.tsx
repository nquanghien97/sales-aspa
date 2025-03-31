'use client'

import React, { useEffect, useState } from 'react'
import Header from './header'
import { UserParams } from '@/dto/user'
import Select from '@/components/ui/Select'
import Pagination from '@/components/ui/Pagination'
import LoadingIcon from '@/components/ui/LoadingIcon'
import { ButtonIcon } from '@/components/ui/ButtonIcon'
import EditUserIcon from '@/assets/icons/EditUserIcon'
import DeleteIcon from '@/assets/icons/DeleteIcon'
import withAuth from '@/hocs/withAuth'
import { CustomersEntity } from '@/entities/customers'
import UpdateCustomer from './actions/UpdateCustomer'
import DeleteCustomer from './actions/DeleteCustomer'
import { getCustomers } from '@/services/customers'

function CustomersManagement() {
  const [customers, setCustomers] = useState<CustomersEntity[]>([]);
  const [searchParams, setSearchParams] = useState<UserParams>({});
  const [refreshKey, setRefreshKey] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState<CustomersEntity>();
  const [isOpenDeleteCustomer, setIsOpenDeleteCustomer] = useState(false);
  const [isOpenUpdateCustomer, setIsOpenUpdateCustomer] = useState(false);

  useEffect(() => {
    document.title = "Quản lý khách hàng"
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await getCustomers({
          ...searchParams,
          page,
          pageSize
        })
        setCustomers(res.customers);
        setTotal(res.total);
      } catch (err) {
        console.error('Error fetching users:', err)
      } finally {
        setLoading(false)
      }
    })()
  }, [page, pageSize, searchParams, refreshKey])

  const renderBody = () => {
    if (loading) return (
      <tr>
        <td colSpan={5}>
          <LoadingIcon color="#1677ff" className='m-auto my-4' />
        </td>
      </tr>
    )
    if (customers.length === 0) return (
      <tr>
        <td colSpan={9} className="!text-center">
          Không có dữ liệu
        </td>
      </tr>
    )
    return (
      customers.map((customer, index) => (
        <tr key={customer.id}>
          <th className="px-4 py-2 text-left font-medium border border-black">{(index + 1) + pageSize * (page - 1)}</th>
          <th className="px-4 py-2 text-left font-medium border border-black">{customer.fullName}</th>
          <th className="px-4 py-2 text-left font-medium border border-black">{customer.job}</th>
          <th className="px-4 py-2 text-left font-medium border border-black">{customer.address} - {customer.ward} - {customer.district} - {customer.province}</th>
          {/* <th className="px-4 py-2 text-left font-medium border border-black">{formatDate(customer.createdAt)}</th> */}
          <th className="px-4 py-2 text-left font-medium border border-black">
            <div className="flex gap-2">
              {/* update customer */}
              <ButtonIcon
                onClick={() => {
                  setIsOpenUpdateCustomer(true);
                  setCustomer(customer);
                }}
              >
                <EditUserIcon color='#1677ff' title='Cập nhật thông tin khách hàng' width={20} height={20} />
              </ButtonIcon>
              <ButtonIcon
                onClick={() => {
                  setIsOpenDeleteCustomer(true);
                  setCustomer(customer);
                }}
              >
                <DeleteIcon color='#1677ff' title='Xóa thông tin khách hàng' width={20} height={20} />
              </ButtonIcon>
            </div>
          </th>
        </tr>
      ))
    )
  }

  return (
    <>
      {customer && (<UpdateCustomer customer={customer} open={isOpenUpdateCustomer} onClose={() => setIsOpenUpdateCustomer(false)} setRefreshKey={setRefreshKey} />)}
      {customer && (<DeleteCustomer customer={customer} open={isOpenDeleteCustomer} onClose={() => setIsOpenDeleteCustomer(false)} setRefreshKey={setRefreshKey} />)}
      <div className="mx-4">
        <h1 className="text-center text-4xl font-bold mb-4 py-4">QUẢN LÝ KHÁCH HÀNG</h1>
        <div className="bg-[#f4d798] rounded-xl p-4 shadow-xl">
          <Header setSearchParams={setSearchParams} setRefreshKey={setRefreshKey} />
          <table className="w-full border-collapse">
            <thead className="bg-[#f0c568]">
              <tr>
                <th className="px-4 py-2 text-left border border-black">STT</th>
                <th className="px-4 py-2 text-left border border-black">Họ tên</th>
                <th className="px-4 py-2 text-left border border-black">Nghề nghiệp</th>
                <th className="px-4 py-2 text-left border border-black">Địa chỉ</th>
                <th className="px-4 py-2 text-left border border-black">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {renderBody()}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center w-full">
            <div>
              <Select
                options={[
                  { label: '1', value: '1' },
                  { label: '10', value: '10' },
                  { label: '20', value: '20' },
                  { label: '50', value: '50' },
                  { label: '100', value: '100' },
                ]}
                defaultValue='10'
                onChange={(e) => {
                  setPageSize(Number(e))
                  setPage(1)
                }}
              />
            </div>
            <Pagination
              totalCount={total}
              onPageChange={(page) => {
                setSearchParams((pre) => ({ ...pre, page }));
                setPage(page);
              }}
              siblingCount={1}
              currentPage={page}
              pageSize={pageSize}
            />
            <div className="whitespace-nowrap">
              <span>Kết quả {1 + (pageSize * (page - 1))} - {(pageSize * page)} của tổng {total} bản ghi</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const CustomersManagementWithAuth = withAuth(CustomersManagement)

export default CustomersManagementWithAuth