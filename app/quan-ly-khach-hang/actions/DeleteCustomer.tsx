import { Button } from '@/components/ui/Button'
import LoadingIcon from '@/components/ui/LoadingIcon'
import Modal from '@/components/ui/Modal'
import { CustomersEntity } from '@/entities/customers'
import { deleteCustomer } from '@/services/customers'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface DeleteUserProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  customer: CustomersEntity
}

function DeleteUser(props: DeleteUserProps) {
  const { open, onClose, setRefreshKey, customer } = props;
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    try {
      await deleteCustomer(customer.id);
      toast.success('Xóa khách hàng thành công');
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
    <Modal open={open} onClose={onClose} className="w-1/3">
      <h1 className="mb-4 text-2xl font-bold text-center">Bạn có chắc chắn muốn xóa <span className="text-[#2563eb]">{customer.fullName}</span></h1>
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

export default DeleteUser