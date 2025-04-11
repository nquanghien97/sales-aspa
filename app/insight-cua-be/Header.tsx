import React, { JSX, ReactNode } from 'react'
import { data_config_height, data_config_weight, Gender } from './data_config';
import { Checkbox, Form, Input, Select } from 'antd';
import { Button } from '@/components/ui/Button';
import { data_bmi } from './data_bmi';

interface HeaderProps {
  currentHeight: string;
  currentAge: string;
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

  const handleCheckboxChange = (value: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty') => {
    if (puberty === value) {
      setPuberty(undefined);
    } else {
      setPuberty(value);
    }
  };

  const handleSubmit = () => {

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
            label={<p className="min-w-[80px]">Chiều cao con (cm)</p>}
            className="flex flex-col w-1/4 px-2"
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
              onChange={(e) => setCurrentHeight(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={<p className="min-w-[80px]">Cân nặng con (kg)</p>}
            className="flex flex-col w-1/4 px-2"
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
              onChange={(e) => setCurrentWeight(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={<p className="min-w-[80px]">Giới tính con</p>}
            className="flex flex-col w-1/4 px-2"
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
              onChange={(e) => setGender(e as Gender)}
            />
          </Form.Item>
          <Form.Item
            label={<p className="min-w-[80px]">Tuổi con</p>}
            className="flex flex-col w-1/4 px-2"
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
              onChange={(e) => setCurrentAge(e.target.value)}
            />
          </Form.Item>
        </div>
        <Form.Item
          name="puberty"
          rules={[
            {
              required: true,
              message: "Trường này là bắt buộc"
            },
          ]}
        >
          <div className="flex flex-col gap-2 w-1/4">
            <div className="flex gap-2 w-[140px] items-center">
              <p className="text-[#2563eb] w-full">0 - 2 tuổi</p>
              <Checkbox
                checked={puberty === 'infant'}
                onChange={() => handleCheckboxChange('infant')}
              />
            </div>
            <div className="flex gap-2 w-[140px] items-center">
              <p className="text-[#2563eb] w-full">Chưa dậy thì</p>
              <Checkbox
                checked={puberty === 'pre-puberty'}
                onChange={() => handleCheckboxChange('pre-puberty')}
              />
            </div>
            <div className="flex gap-2 w-[140px] items-center">
              <p className="text-[#2563eb] w-full">Đang dậy thì</p>
              <Checkbox
                checked={puberty === 'puberty'}
                onChange={() => handleCheckboxChange('puberty')}
              />
            </div>
            <div className="flex gap-2 w-[140px] items-center">
              <p className="text-[#2563eb] w-full">Đã dậy thì</p>
              <Checkbox
                checked={puberty === 'post-puberty'}
                onChange={() => handleCheckboxChange('post-puberty')}
              />
            </div>
          </div>
        </Form.Item>
        <Button variant='primary' type='submit'>Xác nhận</Button>
      </Form>
    </div>
  )
}

export default Header