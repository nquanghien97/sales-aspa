import React, { JSX, ReactNode, useEffect } from 'react'
import { data_config_height, data_config_weight, Gender } from './data_config';
import { Form, Input, Radio, Select } from 'antd';
import { Button } from '@/components/ui/Button';
import { data_bmi } from './data_bmi';
import { useInsightStore } from '@/zustand/insight.store';

interface HeaderProps {
  currentHeight: string;
  currentAge: string;
  currentWeight: string;
  gender: Gender | undefined;
  heightAboveStandard: number;
  heightBelowStandard: number;
  BMI: number;
  puberty: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined;
  setCurrentHeight: React.Dispatch<React.SetStateAction<string>>
  setCurrentWeight: React.Dispatch<React.SetStateAction<string>>
  setGender: React.Dispatch<React.SetStateAction<Gender | undefined>>
  setCurrentAge: React.Dispatch<React.SetStateAction<string>>
  setPuberty: React.Dispatch<React.SetStateAction<"infant" | "pre-puberty" | "puberty" | "post-puberty" | undefined>>
  setDataResponseHeight: React.Dispatch<React.SetStateAction<{ title?: ReactNode; content?: JSX.Element } | undefined>>
  setDataResponseWeight: React.Dispatch<React.SetStateAction<{ title?: ReactNode; content?: JSX.Element } | undefined>>
}
function Header(props: HeaderProps) {
  const {
    currentHeight,
    currentAge,
    gender,
    currentWeight,
    heightAboveStandard,
    heightBelowStandard,
    BMI,
    puberty,
    setCurrentHeight,
    setCurrentWeight,
    setGender,
    setCurrentAge,
    setPuberty,
    setDataResponseHeight,
    setDataResponseWeight,
  } = props;

  const [form] = Form.useForm();

  const { setInsightData, insightData, isSubmited, setIsSubmited } = useInsightStore()

  useEffect(() => {
    setCurrentAge(currentAge || insightData?.currentAge || '')
    setCurrentHeight(currentHeight || insightData?.currentHeight || '')
    setCurrentWeight(currentWeight || insightData?.currentWeight || '')
    setGender(gender || insightData?.gender || undefined)
    setPuberty(puberty || insightData?.puberty || undefined)

    if (currentAge && currentHeight && currentWeight && gender && puberty && isSubmited) {
      const matchedHeightCondition = data_config_height({
        heightAboveStandard,
        heightBelowStandard,
        puberty
      }).find(condition => condition.condition({
        currentHeight: +currentHeight,
      }))
      setDataResponseHeight({
        title: matchedHeightCondition?.title,
        content: matchedHeightCondition?.content
      })

      const matchWeightCondition = data_config_weight({
        BMIAboveStandard: data_bmi[gender!]['95th'][Number(currentAge)],
        BMIBelowStandard: data_bmi[gender!]['5th'][Number(currentAge)],
        puberty
      }).find(condition => condition.condition({
        currentBMI: +BMI,
      }))
      setDataResponseWeight({
        title: matchWeightCondition?.title,
        content: matchWeightCondition?.content
      })
    }

  }, [insightData?.currentAge, insightData?.currentHeight, insightData?.currentWeight, insightData?.gender, insightData?.puberty, setCurrentAge, setCurrentHeight, setCurrentWeight, setGender, setPuberty, currentAge, currentHeight, currentWeight, gender, puberty, heightAboveStandard, heightBelowStandard, BMI, setDataResponseHeight, setDataResponseWeight, isSubmited])

  const handleSubmit = () => {
    setIsSubmited(true)

    const matchedHeightCondition = data_config_height({
      heightAboveStandard,
      heightBelowStandard,
      puberty
    }).find(condition => condition.condition({
      currentHeight: +currentHeight,
    }))
    setDataResponseHeight({
      title: matchedHeightCondition?.title,
      content: matchedHeightCondition?.content
    })

    const matchWeightCondition = data_config_weight({
      BMIAboveStandard: data_bmi[gender!]['95th'][Number(currentAge)],
      BMIBelowStandard: data_bmi[gender!]['5th'][Number(currentAge)],
      puberty
    }).find(condition => condition.condition({
      currentBMI: +BMI,
    }))
    setDataResponseWeight({
      title: matchWeightCondition?.title,
      content: matchWeightCondition?.content
    })
  }

  return (
    <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
      <h2 className="mb-4 text-xl">Nhập thông tin khách hàng</h2>
      <Form form={form} onFinish={handleSubmit} className="flex gap-4 items-center">
        <div className="flex flex-wrap">
          <Form.Item
            initialValue={insightData?.currentHeight}
            label={<p className="min-w-[80px]">Chiều cao con (cm)</p>}
            className="flex flex-col w-1/4 px-2 !mb-0"
            name="currentHeight"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              },
            ]}
          >
            <Input
              placeholder='Chiều cao con (cm)'
              onChange={(e) => {
                setCurrentHeight(e.target.value)
                setInsightData((prev) => ({
                  ...prev,
                  currentHeight: e.target.value,
                  currentWeight: prev?.currentWeight || '',
                  currentAge: prev?.currentAge || '',
                  gender: prev?.gender || undefined,
                  puberty: prev?.puberty || undefined,
                }))
              }}
            />
          </Form.Item>
          <Form.Item
            initialValue={insightData?.currentWeight}
            label={<p className="min-w-[80px]">Cân nặng con (kg)</p>}
            className="flex flex-col w-1/4 px-2 !mb-0"
            name="currentWeight"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              },
            ]}
          >
            <Input
              placeholder='Cân nặng con (kg)'
              onChange={(e) => {
                setCurrentWeight(e.target.value)
                setInsightData((prev) => ({
                  ...prev,
                  currentHeight: prev?.currentHeight || '',
                  currentWeight: e.target.value,
                  currentAge: prev?.currentAge || '',
                  gender: prev?.gender || undefined,
                  puberty: prev?.puberty || undefined,
                }))
              }}
            />
          </Form.Item>
          <Form.Item
            initialValue={insightData?.gender}
            label={<p className="min-w-[80px]">Giới tính con</p>}
            className="flex flex-col w-1/4 px-2 !mb-0"
            name="gender"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              },
            ]}
          >
            <Select
              options={[{ label: 'Nam', value: 'BOY' }, { label: 'Nữ', value: 'GIRL' }]}
              placeholder='Giới tính con'
              onChange={(e) => {
                setGender(e as Gender)
                setInsightData((prev) => ({
                  ...prev,
                  currentHeight: prev?.currentHeight || '',
                  currentWeight: prev?.currentWeight || '',
                  currentAge: prev?.currentAge || '',
                  gender: e,
                  puberty: prev?.puberty || undefined,
                }))
              }}
            />
          </Form.Item>
          <Form.Item
            initialValue={insightData?.currentAge}
            label={<p className="min-w-[80px]">Tuổi con</p>}
            className="flex flex-col w-1/4 px-2 !mb-0"
            name="currentAge"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              },
            ]}
          >
            <Input
              placeholder='Tuổi con'
              onChange={(e) => {
                setCurrentAge(e.target.value)
                setInsightData((prev) => ({
                  ...prev,
                  currentHeight: prev?.currentHeight || '',
                  currentWeight: prev?.currentWeight || '',
                  currentAge: e.target.value,
                  gender: prev?.gender || undefined,
                  puberty: prev?.puberty || undefined,
                }))
              }}
            />
          </Form.Item>
        </div>
        <Form.Item
          initialValue={insightData?.puberty}
          label="Giai đoạn dậy thì"
          wrapperCol={{ flex: "auto" }}
          style={{ marginBottom: 0 }}
          name="puberty"
          rules={[{ required: true, message: "Vui lòng chọn giai đoạn dậy thì" }]}
        >
          <Radio.Group
            className="flex flex-col gap-2"
            onChange={(e) => {
              setPuberty(e.target.value)
              setInsightData((prev) => ({
                ...prev,
                currentHeight: prev?.currentHeight || '',
                currentWeight: prev?.currentWeight || '',
                currentAge: prev?.currentAge || '',
                gender: prev?.gender || undefined,
                puberty: e.target.value,
              }))
            }}>
            <Radio value="infant">0 - 2 tuổi</Radio>
            <Radio value="pre-puberty">Chưa dậy thì</Radio>
            <Radio value="puberty">Đang dậy thì</Radio>
            <Radio value="post-puberty">Đã dậy thì</Radio>
          </Radio.Group>
        </Form.Item>
        <Button variant='primary' type='submit'>Xác nhận</Button>
      </Form>
    </div>
  )
}

export default Header