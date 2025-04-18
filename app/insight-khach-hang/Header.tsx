import React, { JSX, useEffect } from 'react'
import { Form, Radio } from 'antd';
import { Button } from '@/components/ui/Button';
import { useInsightStore } from '@/zustand/insight.store';
import { customer_case } from '@/constants/customer_case';
import { toast } from 'react-toastify';
import { CustomerCaseTye } from './types';

interface HeaderProps {
  customerCase: CustomerCaseTye | undefined;
  setCustomerCase: React.Dispatch<React.SetStateAction<CustomerCaseTye | undefined>>
  setContent: React.Dispatch<React.SetStateAction<{
    customer_status?: JSX.Element;
    conclude?: JSX.Element;
    solution?: JSX.Element;
  } | undefined>>
}
function Header(props: HeaderProps) {
  const {
    customerCase,
    setCustomerCase,
    setContent
  } = props;

  const [form] = Form.useForm();

  const { setInsightData, insightData, isSubmited, setIsSubmited } = useInsightStore()

  useEffect(() => {
    setCustomerCase(customerCase || insightData?.customerCase)
    
    if (customerCase && isSubmited) {
      const matchedCondition = customer_case(
        customerCase
      ).find(condition => condition.condition())
      setContent({
        customer_status: matchedCondition?.content.customer_status,
        conclude: matchedCondition?.content.conclude,
        solution: matchedCondition?.content.solution
      });
    }

  }, [customerCase, insightData?.customerCase, isSubmited, setContent, setCustomerCase])

  const handleSubmit = () => {
    setIsSubmited(true)
    if (!customerCase) {
      toast.warning('Vui lòng chọn trường hợp trước khi xác nhận')
      return
    }
    const matchedCondition = customer_case(
      customerCase
    ).find(condition => condition.condition())
    setContent({
      customer_status: matchedCondition?.content.customer_status,
      conclude: matchedCondition?.content.conclude,
      solution: matchedCondition?.content.solution
    })
  }

  return (
    <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
      <h2 className="mb-4 text-xl">Nhập thông tin khách hàng</h2>
      <Form form={form} onFinish={handleSubmit} className="flex gap-4 items-center">
        <Form.Item
          initialValue={insightData?.customerCase}
          label="Giai đoạn dậy thì"
          wrapperCol={{ flex: "auto" }}
          style={{ marginBottom: 0 }}
          name="puberty"
          rules={[{ required: true, message: "Vui lòng chọn giai đoạn dậy thì" }]}
        >
          <Radio.Group
            className="grid grid-cols-2 gap-2 mx-8"
            onChange={(e) => {
              setCustomerCase(e.target.value)
              setInsightData((prev) => ({
                ...prev,
                customerCase: e.target.value,
              }))
            }}>
            <Radio value="Độ tuổi dưới 30 tuổi, chưa sinh nở. Nám xuất hiện từ lúc nhỏ">
              Độ tuổi dưới 30 tuổi, chưa sinh nở. Nám xuất hiện từ lúc nhỏ
            </Radio>
            <Radio value="Độ tuổi dưới 30 tuổi, chưa sinh nở. Nám xuất hiện từ lúc dậy thì">Độ tuổi dưới 30 tuổi, chưa sinh nở. Nám xuất hiện từ lúc dậy thì</Radio>
            <Radio value="Độ tuổi 30- 40 tuổi, đã sinh nở. Nám xuất hiện từ lúc dậy thì">Độ tuổi 30- 40 tuổi, đã sinh nở. Nám xuất hiện từ lúc dậy thì</Radio>
            <Radio value="Độ tuổi 30- 40 tuổi, đã sinh nở. Nám xuất hiện sau sinh">Độ tuổi 30- 40 tuổi, đã sinh nở. Nám xuất hiện sau sinh</Radio>
            <Radio value="Độ tuổi 40 - 60 tuổi, đã sinh nở. Nám xuất hiện từ lúc dậy thì">Độ tuổi 40 - 60 tuổi, đã sinh nở. Nám xuất hiện từ lúc dậy thì</Radio>
            <Radio value="Độ tuổi 40 - 60 tuổi, đã sinh nở. Nám xuất hiện sau sinh">Độ tuổi 40 - 60 tuổi, đã sinh nở. Nám xuất hiện sau sinh</Radio>
            <Radio value="Độ tuổi trên 60 tuổi, đã sinh nở. Nám xuất hiện từ lúc dậy thì">Độ tuổi trên 60 tuổi, đã sinh nở. Nám xuất hiện từ lúc dậy thì</Radio>
            <Radio value="Độ tuổi trên 60 tuổi, đã sinh nở. Nám xuất hiện sau sinh, tiền mãn kinh">Độ tuổi trên 60 tuổi, đã sinh nở. Nám xuất hiện sau sinh, tiền mãn kinh</Radio>
          </Radio.Group>
        </Form.Item>
        <Button variant='primary' type='submit'>Xác nhận</Button>
      </Form>
    </div>
  )
}

export default Header