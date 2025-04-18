import React, { JSX, useEffect } from 'react'
import { Form, Radio } from 'antd';
import { Button } from '@/components/ui/Button';
import { useInsightStore } from '@/zustand/insight.store';
import { customer_case } from '@/constants/customer_case';
import { toast } from 'react-toastify';
import { AgeType, TimeType } from './types';

interface HeaderProps {
  age?: AgeType
  setAge: React.Dispatch<React.SetStateAction<AgeType | undefined>>
  time?: TimeType
  setTime: React.Dispatch<React.SetStateAction<TimeType | undefined>>
  setContent: React.Dispatch<React.SetStateAction<{
    customer_status?: JSX.Element;
    conclude?: JSX.Element;
    solution?: JSX.Element;
  } | undefined>>
}
function Header(props: HeaderProps) {
  const {
    age,
    setAge,
    time,
    setTime,
    setContent
  } = props;

  const [form] = Form.useForm();

  const { setInsightData, insightData, isSubmited, setIsSubmited } = useInsightStore()

  useEffect(() => {
    setAge((age || insightData?.age) as AgeType | undefined)
    setTime((time || insightData?.time) as TimeType | undefined)

    if (age && time && isSubmited) {
      const matchedCondition = customer_case({
        age,
        time
      }).find(condition => condition.condition())
      setContent({
        customer_status: matchedCondition?.content.customer_status,
        conclude: matchedCondition?.content.conclude,
        solution: matchedCondition?.content.solution
      });
    }

  }, [age, insightData?.age, insightData?.time, isSubmited, setAge, setContent, setTime, time])

  const handleSubmit = () => {
    setIsSubmited(true)
    if (!age || !time) {
      toast.warning('Vui lòng chọn trường hợp trước khi xác nhận')
      return
    }
    const matchedCondition = customer_case({
      age,
      time
    }).find(condition => condition.condition())
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
          initialValue={insightData?.age}
          label="Độ tuổi"
          wrapperCol={{ flex: "auto" }}
          style={{ marginBottom: 0 }}
          name="age"
          rules={[{ required: true, message: "Vui lòng chọn độ tuổi" }]}
        >
          <Radio.Group
            className="flex flex-col gap-2 mx-8"
            onChange={(e) => {
              setAge(e.target.value)
              setInsightData((prev) => ({
                ...prev,
                customerCase: e.target.value,
              }))
            }}>
            <Radio value="Độ tuổi dưới 30 tuổi">Độ tuổi dưới 30 tuổi</Radio>
            <Radio value="Độ tuổi 30- 40 tuổi">Độ tuổi 30- 40 tuổi</Radio>
            <Radio value="Độ tuổi 40 - 60 tuổi">Độ tuổi 40 - 60 tuổi</Radio>
            <Radio value="Độ tuổi trên 60 tuổi">Độ tuổi trên 60 tuổi</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          initialValue={insightData?.time}
          label="Thời điểm xuất hiện nám"
          wrapperCol={{ flex: "auto" }}
          style={{ marginBottom: 0 }}
          name="time"
          rules={[{ required: true, message: "Vui lòng chọn thời điểm xuất hiện nám" }]}
        >
          <Radio.Group
            className="flex flex-col gap-2 mx-8"
            onChange={(e) => {
              setTime(e.target.value)
              setInsightData((prev) => ({
                ...prev,
                customerCase: e.target.value,
              }))
            }}>
            <Radio value="Nám xuất hiện từ lúc nhỏ">Nám xuất hiện từ lúc nhỏ</Radio>
            <Radio value="Nám xuất hiện từ lúc dậy thì">Nám xuất hiện từ lúc dậy thì</Radio>
            <Radio value="Nám xuất hiện sau sinh">Nám xuất hiện sau sinh</Radio>
            <Radio value="Nám xuất hiện sau sinh, tiền mãn kinh">Nám xuất hiện sau sinh , tiền mãn kinh</Radio>
          </Radio.Group>
        </Form.Item>
        <Button variant='primary' type='submit'>Xác nhận</Button>
      </Form>
    </div>
  )
}

export default Header