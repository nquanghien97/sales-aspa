'use client'

import React, { useEffect, useState } from 'react'
import Header from './Header'
import Select from '@/components/ui/Select'
import Pagination from '@/components/ui/Pagination'
import LoadingIcon from '@/components/ui/LoadingIcon'
import withAuth from '@/hocs/withAuth'
import CanxiRequirement from '@/components/CanxiRequirement'
import { getInsightMother } from '@/services/insight-mother'
import { InsightMotherEntity } from '@/entities/insight-mother'
import { data_milk } from './data_milk'
import Documents from './Documents'
import { Button } from 'antd'

function HandleRejection() {
  const [datas, setDatas] = useState<InsightMotherEntity[]>([]);
  const [searchParams, setSearchParams] = useState<{ page?: number, pageSize?: string, search?: string }>({});
  const [milk, setMilk] = useState<string>()
  const [refreshKey, setRefreshKey] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isOpenDocument, setIsOpenDocument] = useState(false);

  useEffect(() => {
    document.title = "Insight của mẹ"
  }, []);

  const matchedMilk = data_milk.find(data => data.name === milk)

  useEffect(() => {
    if (!milk || !searchParams.search) return
    (async () => {
      try {
        setLoading(true)
        const res = await getInsightMother({
          ...searchParams,
          page,
          pageSize,
        })
        setDatas(res.data);
        setTotal(res.total);
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    })()
  }, [page, pageSize, searchParams, refreshKey, milk])

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
        <td colSpan={9} className="!text-center py-4">
          Chọn trường hợp và sữa
        </td>
      </tr>
    )
    return (
      datas.map((data, index) => (
        <tr key={data.id}>
          <th className="px-4 py-2 text-left font-medium border border-black">{(index + 1) + pageSize * (page - 1)}</th>
          <th className="px-4 py-2 text-left font-medium border border-black">{data.keyword}</th>
          <th className="px-4 py-2 text-left font-medium border border-black"><div dangerouslySetInnerHTML={{ __html: data.explain.replaceAll('Sữa X', matchedMilk?.name || '').replaceAll('Y mg/100g sữa', `${matchedMilk?.canxi} mg/100g sữa` || '') }} /></th>
          <th className="px-4 py-2 text-left font-medium border border-black"><div dangerouslySetInnerHTML={{ __html: data.solution }} /></th>
        </tr>
      ))
    )
  }

  return (
    <>
      <Documents open={isOpenDocument} onClose={() => setIsOpenDocument(false)} />
      <div className="bg-[#f4d798] shadow-xl rounded-xl p-4">
        <div className="flex">
          <div className="w-3/5 px-4">
            <div className="flex items-center mb-4">
              <div>
                <Button type='primary' onClick={() => setIsOpenDocument(true)}>Xem tài liệu</Button>
              </div>
              <div className="flex-1">
                <h1 className="text-center text-4xl font-bold py-4">INSIGHT CỦA MẸ</h1>
              </div>
            </div>
            <Header setSearchParams={setSearchParams} setRefreshKey={setRefreshKey} setMilk={setMilk} />
            <div className="w-full">
              <table className="w-full border-collapse">
                <thead className="bg-[#f0c568]">
                  <tr>
                    <th className="px-4 py-2 text-left border border-black">STT</th>
                    <th className="px-4 py-2 text-left border border-black">Trường hợp</th>
                    <th className="px-4 py-2 text-left border border-black">Giải thích nguyên nhân</th>
                    <th className="px-4 py-2 text-left border border-black">Giải pháp</th>
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
          <div className="w-2/5">
            <div className="sticky top-0">
              <CanxiRequirement />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HandleRejectionWithAuth = withAuth(HandleRejection)

export default HandleRejectionWithAuth