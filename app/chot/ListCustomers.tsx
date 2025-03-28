'use client'
import LoadingIcon from '@/components/ui/LoadingIcon';
import { CustomersEntity } from '@/entities/customers';
import { getCustomers } from '@/services/customers'
import { Button, Form, Select } from 'antd';
import React, { useState } from 'react';
import data_address from '@/constants/data_address.json'

function ListCustomers() {
  const [customers, setCustomers] = useState<CustomersEntity[]>([]);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onSubmit = async (data: { province: string }) => {
    try {
      setLoading(true)
      const res = await getCustomers({
        search: data.province
      })
      setCustomers(res.customers);
    } catch (err) {
      console.error('Error fetching users:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <Form form={form} onFinish={onSubmit} className="w-full">
        <div className="flex items-center py-4 gap-2 w-full">
          <div className="flex items-center w-full flex-1">
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
                options={data_address.map(item => ({ label: item.FullName, value: item.FullName }))}
              />
            </Form.Item>
          </div>
          <Button type='primary' htmlType="submit">
            Tìm kiếm
            {loading && <LoadingIcon />}
          </Button>
        </div>
      </Form>
      <div className="max-h-[700px] overflow-auto">
        <ul>
          {customers.map((customer, index) => (
            <li className="flex flex-col bg-[white] my-2 px-4 py-2 rounded-xl" key={customer.id}>
              <p className="font-bold">{index + 1}.</p>
              <ul className="list-disc pl-4">
                <li className="font-semibold">
                  <span>Họ tên:</span> {customer.fullName}
                </li>
                <li className="font-semibold">
                  <span>Nghề nghiệp:</span> {customer.job}
                </li>
                <li className="font-semibold">
                  <span>Địa chỉ:</span> {customer.address} - {customer.ward} - {customer.district} - {customer.province}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ListCustomers