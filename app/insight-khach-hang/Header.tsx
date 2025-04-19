import React, { useEffect } from 'react'
import { Form, Radio } from 'antd';
// import { Button } from '@/components/ui/Button';
import { useInsightStore } from '@/zustand/insight.store';
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from '@prisma/client';

interface HeaderProps {
  age?: CUSTOMER_INSIGHT_AGE
  setAge: React.Dispatch<React.SetStateAction<CUSTOMER_INSIGHT_AGE | undefined>>
  time?: CUSTOMER_INSIGHT_TIME
  setTime: React.Dispatch<React.SetStateAction<CUSTOMER_INSIGHT_TIME | undefined>>
}
function Header(props: HeaderProps) {
  const {
    age,
    setAge,
    time,
    setTime,
  } = props;

  const [form] = Form.useForm();

  const { setInsightData, insightData } = useInsightStore()

  useEffect(() => {
    setAge((age || insightData?.age) as CUSTOMER_INSIGHT_AGE | undefined)
    setTime((time || insightData?.time) as CUSTOMER_INSIGHT_TIME | undefined)

  }, [age, insightData?.age, insightData?.time, setAge, setTime, time])

  return (
    <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
      <h2 className="mb-4 text-xl">Nhập thông tin khách hàng</h2>
      <Form form={form} className="flex gap-4 items-center">
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
            <Radio value="UNDER_30">Độ tuổi dưới 30 tuổi</Radio>
            <Radio value="FROM_30_TO_40">Độ tuổi 30- 40 tuổi</Radio>
            <Radio value="FROM_40_TO_60">Độ tuổi 40 - 60 tuổi</Radio>
            <Radio value="ABOVE_60">Độ tuổi trên 60 tuổi</Radio>
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
            <Radio value="SINCE_CHILDHOOD">Nám xuất hiện từ lúc nhỏ</Radio>
            <Radio value="SINCE_PUBERTY">Nám xuất hiện từ lúc dậy thì</Radio>
            <Radio value="AFTER_GIVING_BIRTH">Nám xuất hiện sau sinh</Radio>
            <Radio value="AFTER_BIRTH_AND_PERIMENOPAUSE">Nám xuất hiện sau sinh , tiền mãn kinh</Radio>
          </Radio.Group>
        </Form.Item>
        {/* <Button variant='primary' type='submit'>Xác nhận</Button> */}
      </Form>
    </div>
  )
}

export default Header