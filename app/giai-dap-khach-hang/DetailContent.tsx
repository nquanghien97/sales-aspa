import { CategoryEntity } from '@/entities/category'
import { Modal } from 'antd'
import React from 'react'

interface DetailContentProps {
  data: CategoryEntity
  open: boolean
  onClose: () => void
}

function DetailContent(props: DetailContentProps) {
  const { data, open, onClose } = props
  return (
    <Modal
      open={open}
      onClose={onClose}
      onCancel={onClose}
      className='!w-2/3 !top-2 !h-[90vh]'
      footer={false}
    >
      <div className="p-8" dangerouslySetInnerHTML={{ __html: data.content}} />
    </Modal>
  )
}

export default DetailContent