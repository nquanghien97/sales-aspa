import { Button } from '@/components/ui/Button'
import LoadingIcon from '@/components/ui/LoadingIcon'
import { FileCategoriesEntity } from '@/entities/file-categories'
import { deleteFileCategory } from '@/services/file-categories'
import { Modal } from 'antd'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface DeleteProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  data: FileCategoriesEntity
}

function DeleteCategory(props: DeleteProps) {
  const { open, onClose, setRefreshKey, data } = props;
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    try {
      await deleteFileCategory(data.id);
      toast.success('Xóa danh mục thành công');
      setRefreshKey(pre => !pre);
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <Modal open={open}
      onClose={onClose}
      onCancel={onClose}
      className='!w-full lg:!w-1/2 min-h-[300px]'
      footer={false}
    >
      <h1 className="text-2xl mb-4 text-center">Bạn có chắc chắn muốn xóa danh mục <strong>{data.title}</strong> không?</h1>
      <div className="flex justify-center gap-4">
        <Button variant='danger' onClick={onClose}>Hủy</Button>
        <Button variant='primary' onClick={onDelete}>
          Xác nhận
          {loading && <LoadingIcon />}
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteCategory