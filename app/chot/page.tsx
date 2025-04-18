'use client'

import React, { useEffect, useState } from 'react'
import ListCustomers from './ListCustomers'
import { useAuthStore } from '@/zustand/auth.store';
import withAuth from '@/hocs/withAuth';
import { searchParams } from '@/dto/insight-mother'
import { CategoryEntity } from '@/entities/category';
import { getConfirms } from '@/services/confirms';
import LoadingIcon from '@/components/ui/LoadingIcon';
import { formatDate } from '@/utils/formatDate';
import { ButtonIcon } from '@/components/ui/ButtonIcon';
import DataIcon from '@/assets/icons/DataIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import Select from '@/components/ui/Select';
import Pagination from '@/components/ui/Pagination';
import Update from './actions/Update';
import Delete from './actions/Delete';
import Header from './Header';

function Confirms() {

  const [datas, setDatas] = useState<CategoryEntity[]>([]);
  const [searchParams, setSearchParams] = useState<searchParams>({});
  const [refreshKey, setRefreshKey] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CategoryEntity>();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  const { me } = useAuthStore();

  useEffect(() => {
    document.title = "GIỚI THIỆU GIẢI PHÁP";
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await getConfirms({
          ...searchParams,
          page,
          pageSize,
        })
        setDatas(res.listConfirms);
        setTotal(res.total);
      } catch (err) {
        console.error('Error fetching data:', err)
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
    if (datas.length === 0) return (
      <tr>
        <td colSpan={9} className="!text-center">
          Không có dữ liệu
        </td>
      </tr>
    )
    return (
      datas.map((data, index) => (
        <tr key={data.id}>
          <th className="px-4 py-2 text-left font-medium border border-black">{(index + 1) + pageSize * (page - 1)}</th>
          <th className="px-4 py-2 text-left font-medium border border-black">{data.keyword}</th>
          <th className="px-4 py-2 text-left font-medium border border-black"><div dangerouslySetInnerHTML={{ __html: data.content }} /></th>
          <th className="px-4 py-2 text-left font-medium border border-black">{formatDate(data.createdAt)}</th>
          {me?.role === 'ADMIN' && (
            <th className="px-4 py-2 text-left font-medium border border-black">
              <div className="flex gap-2">
                {/* update user */}
                <ButtonIcon
                  onClick={() => {
                    setIsOpenUpdate(true);
                    setData(data);
                  }}
                >
                  <DataIcon color='#1677ff' title='Cập nhật thông tin' width={20} height={20} />
                </ButtonIcon>
                <ButtonIcon
                  onClick={() => {
                    setIsOpenDelete(true);
                    setData(data);
                  }}
                >
                  <DeleteIcon color='#1677ff' title='Xóa dữ liệu' width={20} height={20} />
                </ButtonIcon>
              </div>
            </th>
          )}
        </tr>
      ))
    )
  }

  return (
    <div className="mx-auto px-4">
      {data && (<Update data={data} open={isOpenUpdate} onClose={() => setIsOpenUpdate(false)} setRefreshKey={setRefreshKey} />)}
      {data && (<Delete data={data} open={isOpenDelete} onClose={() => setIsOpenDelete(false)} setRefreshKey={setRefreshKey} />)}
      <h1 className="text-center text-4xl font-bold mb-4 py-4">CHỐT</h1>
      <div className="flex gap-2">
        <div className="w-2/3">
          <div className="bg-[#f4d798] shadow-xl rounded-xl p-4">
            <Header setSearchParams={setSearchParams} setRefreshKey={setRefreshKey} />
            <table className="w-full border-collapse">
              <thead className="bg-[#f0c568]">
                <tr>
                  <th className="px-4 py-2 text-left border border-black w-[5%]">STT</th>
                  <th className="px-4 py-2 text-left border border-black">Từ khóa</th>
                  <th className="px-4 py-2 text-left border border-black">Nội dung</th>
                  <th className="px-4 py-2 text-left border border-black w-[15%]">Thời gian tạo</th>
                  {me?.role === 'ADMIN' && <th className="px-4 py-2 text-left border border-black w-[5%]">Chức năng</th>}
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
        <div className="flex border border-black p-4 w-1/3 rounded-md">
          <ListCustomers />
        </div>
      </div>
    </div>
  )
}
const ConfirmsWithAuth = withAuth(Confirms)

export default ConfirmsWithAuth