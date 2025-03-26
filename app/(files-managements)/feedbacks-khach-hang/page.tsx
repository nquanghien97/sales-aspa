'use client';

import React, { useEffect, useState } from 'react'
import withAuth from '@/hocs/withAuth';
import CreateCategory from './(actions)/CreateCategory';
import { useFileCategories } from '@/zustand/file-categories';
import { FileCategoriesEntity } from '@/entities/file-categories';
import DeleteCategory from './(actions)/DeleteCategory';
import UpdateCategory from './(actions)/UpdateCategory';
import { SortableList } from './(actions)/SortableList';
import { ButtonIcon } from '@/components/ui/ButtonIcon';
import EditIcon from '@/assets/icons/EditIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import { Button } from '@/components/ui/Button';

function Feedbacks() {
  const { fileCategories, getFileCategories } = useFileCategories();

  const [itemsFeedbacks, setItemsFeedbacks] = useState<FileCategoriesEntity[]>([]);

  const [data, setData] = useState<FileCategoriesEntity>();

  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(false);

  useEffect(() => {
    setItemsFeedbacks(fileCategories?.filter(item => item.category === 'FEEDBACKS') || []);
  }, [fileCategories]);

  useEffect(() => {
    (async () => {
      await getFileCategories();
    })()
  }, [getFileCategories, refreshKey])

  if (!fileCategories) {
    return <p>Không có dữ liệu</p>
  }

  return (
    <div>
      {<CreateCategory open={isOpenCreate} onClose={() => setIsOpenCreate(false)} setRefreshKey={setRefreshKey} />}
      {data && <DeleteCategory open={isOpenDelete} onClose={() => setIsOpenDelete(false)} setRefreshKey={setRefreshKey} data={data} />}
      {data && <UpdateCategory open={isOpenUpdate} onClose={() => setIsOpenUpdate(false)} setRefreshKey={setRefreshKey} data={data} />}
      <h1 className="text-center text-4xl font-bold my-8">QUẢN LÝ DANH MỤC</h1>
      <div className="mb-4">
        <Button variant='primary' onClick={() => setIsOpenCreate(true)}>Thêm mới</Button>
      </div>
      <div className="w-full flex max-lg:flex-col">
        <div className="w-full">
          {itemsFeedbacks.length > 0 ? (
            <SortableList
              items={itemsFeedbacks}
              onChange={setItemsFeedbacks}
              renderItem={(item) => {
                return (
                  <SortableList.Item id={item.id}>
                    {item.title}
                    <div className="flex justify-end flex-1">
                      <ButtonIcon
                        onClick={() => {
                          setData(item);
                          setIsOpenUpdate(true);
                        }}
                      >
                        <EditIcon width={16} height={16} />
                      </ButtonIcon>
                      <ButtonIcon
                        onClick={() => {
                          setData(item);
                          setIsOpenDelete(true);
                        }}
                      >
                        <DeleteIcon width={16} height={16} />
                      </ButtonIcon>
                      <SortableList.DragHandle />
                    </div>
                  </SortableList.Item>
                );
              }}
            />
          ) : (
            <p>Không có danh mục</p>
          )}
        </div>
      </div>
    </div>
  )
}

const FeedbackWithAuth = withAuth(Feedbacks)

export default FeedbackWithAuth