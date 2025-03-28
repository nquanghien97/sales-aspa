import { Button } from '@/components/ui/Button'
import LoadingIcon from '@/components/ui/LoadingIcon'
import { CustomersDTO } from '@/dto/customers'
import { createCustomer } from '@/services/customers'
import { Form, Input, Modal, Select } from 'antd'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import data_address from '@/constants/data_address.json'

interface CreateUserProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateUser(props: CreateUserProps) {
  const { open, onClose, setRefreshKey } = props;

  const [loading, setLoading] = useState(false);
  const [optionProvinces, setOptionProvinces] = useState<{ label: string, value: string }[]>([]);
  const [optionsDistricts, setOptionsDistricts] = useState<{ label: string, value: string }[]>([]);
  const [optionsWards, setOptionsWards] = useState<{ label: string, value: string }[]>([]);

  const [form] = Form.useForm();

  useEffect(() => {
    setOptionProvinces(data_address.map(item => ({ label: item.FullName, value: item.FullName })))
  }, [])

  const handleClose = () => {
    onClose();
    form.resetFields();
  }

  const onSubmit = async (data: CustomersDTO) => {
    setLoading(true);
    try {
      // handle create user
      await createCustomer(data)
      setRefreshKey(pre => !pre);
      toast.success('Thêm mới khách hàng thành công')
      handleClose();
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        toast.error(e.message)
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      onCancel={handleClose}
      footer={false}
      className='!w-1/2'
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Thêm mới khách hàng</h1>
      <div>
        <Form form={form} onFinish={onSubmit}>
          <div className="flex items-center flex-col py-4 border-b mb-4">
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Họ tên</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}>
                  <Input className="w-full" placeholder='Họ tên' />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Số điện thoại</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="phoneNumber"
                >
                  <Input className="w-full" placeholder='Số điện thoại' />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Công việc</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="job"
                >
                  <Input className="w-full" placeholder='Công việc' />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Tỉnh/Thành phố</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="province"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}
                >
                  <Select
                    className="w-full"
                    placeholder='Tỉnh/Thành phố'
                    options={optionProvinces}
                    onChange={(data) => {
                      form.setFieldsValue({
                        district: null,
                        ward: null
                      })
                      setOptionsDistricts(data_address.filter(item => item.FullName === data).flatMap(item2 => item2.District.map(item3 => ({ label: item3.FullName, value: item3.FullName }))))
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Quận/Huyện</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="district"
                >
                  <Select
                    className="w-full"
                    placeholder='Quận/Huyện'
                    options={optionsDistricts}
                    onChange={(data) => {
                      form.setFieldsValue({
                        ward: null,
                      })
                      const options = data_address
                        .flatMap(item => item.District.filter(item1 => item1.FullName === data))
                        .flatMap(item2 =>
                          (item2.Ward ?? []) // Đảm bảo luôn là mảng
                            .filter(item3 => item3 !== undefined)
                            .map(item4 => ({ label: item4.FullName, value: item4.FullName }))
                        );
                      setOptionsWards(options)
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Phường/xã</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="ward"
                >
                  <Select
                    className="w-full"
                    placeholder='Phường/xã'
                    options={optionsWards}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[150px] text-left text-[#2563eb]">Địa chỉ chi tiết</p>
              <div className="flex items-center flex-1">
                <Form.Item
                  className="!mb-0 w-full flex-1"
                  name="address"
                >
                  <Input className="w-full" placeholder='Địa chỉ chi tiết' />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant='danger' onClick={handleClose}>Hủy</Button>
            <Button variant='primary' type="submit">
              Xác nhận
              {loading && <LoadingIcon />}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default CreateUser