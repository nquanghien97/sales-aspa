'use client';

import DownloadIcon from '@/assets/icons/DownloadIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import LoadingIcon from '@/components/ui/LoadingIcon';
import Pagination from '@/components/ui/Pagination';
import Select from '@/components/ui/Select';
import { FilesEntity } from '@/entities/files';
import { getFiles } from '@/services/files';
import { Image } from 'antd';
import React, { useEffect, useState } from 'react'

function SalesPolicy() {
  const [files, setFiles] = useState<FilesEntity[]>([]);
  const [searchParams, setSearchParams] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Feedback Khách hàng'
  }, [])

  const onSearch = () => {
    setSearchParams({
      ...searchParams,
      search
    })
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getFiles({
          ...searchParams,
          page,
          pageSize,
          category: 'feedbacks',
        })
        setFiles(res.files);
        setTotal(res.total);
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false);
      }
    })()
  }, [page, pageSize, searchParams])

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-4 py-4">Feedback Khách hàng</h1>
      <div className="mb-2">
        <div className="flex items-center gap-2 w-full">
          <Input
            placeholder='Tìm kiếm tên hình ảnh, video'
            icon={<SearchIcon />}
            className="w-1/2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button variant='primary' onClick={onSearch}>Tìm kiếm</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full py-4 gap-4">
        {loading ? (
          <LoadingIcon color='blue' />
        ) : (
          files.length > 0 ? (
            files.map((file, index) => {
              if (file.type?.startsWith('image')) {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <Image.PreviewGroup>
                      <Image className="border-2 m-auto cursor-pointer" width={300} height={180} src={`/api${file.url}`} alt="preview avatar" />
                    </Image.PreviewGroup>
                    <Button variant='primary'>
                      <a download href={`/api${file.url}`} className="flex">
                        <span>Tải xuống</span>
                        <DownloadIcon />
                      </a>
                    </Button>
                  </div>
                )
              }
              if (file.type?.startsWith('video')) {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <video
                      controls
                      width={300}
                      height={300}
                      className='h-[180px] w-[300px]'
                    >
                      <source className="border-2 m-auto cursor-pointer" width={100} height={100} src={`/api${file.url}`} />
                    </video>
                    <Button variant='primary'>
                      <a download href={`/api${file.url}`} className="flex">
                        <span>Tải xuống</span>
                        <DownloadIcon />
                      </a>
                    </Button>
                  </div>
                )
              }
            })
          ) : (
            <p>Không có dữ liệu</p>
          )
        )
        }
      </div>
      <div className="mt-4 flex justify-between items-center w-1/2 m-auto">
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
  )
}

export default SalesPolicy