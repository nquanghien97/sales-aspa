'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import React, { JSX, useEffect, useState } from 'react'
import { data_height, data_weight } from '@/constants/data'
import { data_config, Gender } from './data_config'
import withAuth from '@/hocs/withAuth'
import { heightCalculator } from '@/utils/heightCalculator'

const optionsGender = {
  BOY: 'Nam',
  GIRL: 'Nữ'
}
function Content() {
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>();
  const [currentAge, setCurrentAge] = useState('');
  const [dataResponse, setDataResponse] = useState<{ title?: string, content?: JSX.Element }>();
  const [puberty, setPuberty] = useState<'puberty' | 'no-puberty' | undefined>()
  const [errorMessage, setErrorMessage] = useState<{ currentHeight?: string, currentWeight?: string, gender?: string, currentAge?: string, puberty?: string }>({
    currentHeight: '',
    currentWeight: '',
    gender: '',
    currentAge: '',
    puberty: ''
  });

  useEffect(() => {
    document.title = "Kịch bản tư vấn"
  }, []);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!currentHeight) {
      errors.currentHeight = 'Chiều cao không được để trống';
    } else if (isNaN(Number(currentHeight)) || Number(currentHeight) <= 0) {
      errors.currentHeight = 'Chiều cao phải là số dương';
    }

    if (!currentWeight) {
      errors.currentWeight = 'Cân nặng không được để trống';
    } else if (isNaN(Number(currentWeight)) || Number(currentWeight) <= 0) {
      errors.currentWeight = 'Cân nặng phải là số dương';
    }

    if (!gender) {
      errors.gender = 'Bạn phải chọn giới tính';
    }

    if (!currentAge) {
      errors.currentAge = 'Số tuổi không được để trống';
    } else if (isNaN(Number(currentAge)) || Number(currentAge) <= 0) {
      errors.currentAge = 'Số tuổi phải là số dương';
    }

    if (!puberty) {
      errors.puberty = 'Bạn phải chọn dậy thì';
    }

    setErrorMessage(errors);

    return Object.keys(errors).length === 0;
  };

  const handleCheckboxChange = (value: 'puberty' | 'no-puberty') => {
    if (puberty === value) {
      setPuberty(undefined);
    } else {
      setPuberty(value);
    }
  };

  const weightBelowStandard = data_weight?.[gender!]?.[+currentAge] - 1.5
  const weightAboveStandard = data_weight?.[gender!]?.[+currentAge] + 1.5

  const heightBelowStandard = data_height?.[gender!]?.[+currentAge] - 2
  const heightAboveStandard = data_height?.[gender!]?.[+currentAge] + 2

  const handleSubmit = () => {
    if (!validateForm()) return;


    const matchedCondition = data_config({
      weightAboveStandard,
      weightBelowStandard,
      heightAboveStandard,
      heightBelowStandard
    }).find(condition => condition.condition({
      currentHeight: +currentHeight,
      currentAge: +currentAge,
      currentWeight: +currentWeight,
      gender: gender!
    }))
    setDataResponse({
      title: matchedCondition?.title,
      content: matchedCondition?.content
    })
  }

  const ketLuanDayThi = () => {
    if (gender === 'BOY') {
      if (+currentAge >= 8 && +currentAge <= 11) {
        return <p>Hiện bé nhà mình đang trong giai đoạn <strong>tiền dậy thì nha mẹ</strong></p>
      }
      if (puberty === 'puberty') {
        return <p>Hiện bé nhà mình đang trong giai đoạn <strong>dậy thì nha mẹ</strong></p>
      }
      return <p>Hiện bé nhà mình đang trong giai đoạn <strong>vàng để phát triền chiều cao và cân nặng nha mẹ</strong></p>
    }
  }

  const ketLuanChieuCao = () => {
    if (+currentHeight < heightBelowStandard) {
      return <strong>thấp hơn {(data_height?.[gender!]?.[+currentAge] - +currentHeight).toFixed(2)} cm so với tiêu chuẩn</strong>
    }
    if (+currentHeight > heightAboveStandard) {
      return <strong>cao hơn {(+currentHeight - data_height?.[gender!]?.[+currentAge]).toFixed(2)} cm so với tiêu chuẩn</strong>
    }
    return <strong>đạt chiều cao tiêu chuẩn</strong>
  }

  const ketLuanCanNang = () => {
    if (+currentWeight < weightBelowStandard) {
      return <strong>nhẹ hơn {(data_weight?.[gender!]?.[+currentAge] - +currentWeight).toFixed(2)} kg so với tiêu chuẩn</strong>
    }
    if (+currentWeight > weightAboveStandard) {
      return <strong>nặng hơn {(+currentWeight - data_weight?.[gender!]?.[+currentAge]).toFixed(2)} kg so với tiêu chuẩn</strong>
    }
    return <strong>đạt cân nặng tiêu chuẩn</strong>
  }

  const BMI = (Number(currentWeight)) / ((Number(currentHeight) / 100) * (Number(currentHeight) / 100))
  const ketLuanBMI = () => {
    if (BMI < 18.5) {
      return <strong>Bé nằm trong cân nặng: Thiếu cân</strong>
    }
    if (BMI >= 18.5 && BMI < 24.9) {
      return <strong>Bé nằm trong cân nặng: Trung Bình</strong>
    }
    if (BMI >= 25 && BMI < 29.9) {
      return <strong>Bé nằm trong cân nặng: Thừa cân</strong>
    }
    if (BMI >= 30 && BMI < 34.9) {
      return <strong>Bé nằm trong cân nặng: Béo phì</strong>
    }
    if (BMI >= 50) {
      return <strong>Bé nằm trong cân nặng: Cực kỳ béo phì</strong>
    }
  }

  const ketLuanGiaiDoan = () => {
    if(0 < Number(currentAge) && Number(currentAge) <= 2 ) {
      return <p><strong>Giai đoạn 1000 ngày đầu đời (0-2 tuổi): </strong>Giai đoạn quyết định 60% tiềm năng chiều cao tương lai, cần tập trung vào dinh dưỡng và phát triển xương nền tảng.</p>
    }
    if(Number(currentAge) > 3 && Number(currentAge) <= 12) {
      return <p><strong>Giai đoạn vàng (3-12 tuổi): </strong>Trẻ phát triển đều đặn, cần đảm bảo bổ sung vi chất và duy trì vận động hợp lý.</p>
    }
    if(Number(currentAge) > 12 && Number(currentAge) <= 18) {
      return <p><strong>Giai đoạn bứt phá (12-18 tuổi): </strong>Đây là thời điểm tăng trưởng mạnh nhất trước khi xương đóng sụn.</p>
    }
  }

  const heightTo20 = heightCalculator(Number(currentHeight), Number(currentAge), gender as Gender);

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4 py-4">INSIGHT CỦA BÉ</h1>
      <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
        <h2 className="mb-4 text-xl">Nhập thông tin khách hàng</h2>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/6 justify-start">
            <Input label='Chiều cao (cm)' onChange={(e) => setCurrentHeight(e.target.value)} />
            <p className="text-[red] text-sm">{errorMessage?.currentHeight}</p>
          </div>
          <div className="flex flex-col w-1/6 justify-start">
            <Input label='Cân nặng (kg)' onChange={(e) => setCurrentWeight(e.target.value)} />
            <p className="text-[red] text-sm">{errorMessage?.currentWeight}</p>
          </div>
          <div className="flex flex-col w-1/6 justify-start">
            <Select options={[{ label: 'Nam', value: 'BOY' }, { label: 'Nữ', value: 'GIRL' }]} label='Giới tính' placeholder='Giới tính' onChange={(e) => setGender(e as Gender)} />
            <p className="text-[red] text-sm">{errorMessage?.gender}</p>
          </div>
          <div className="flex flex-col w-1/6 justify-start">
            <Input label='Số tuổi' onChange={(e) => setCurrentAge(e.target.value)} />
            <p className="text-[red] text-sm">{errorMessage?.currentAge}</p>
          </div>
          <div className="flex w-1/6 flex-col">
            <div className="flex gap-4 items-start">
              <div className="flex gap-2 h-[40px] items-center">
                <label htmlFor="puberty" className="text-[#2563eb]">Đã dậy thì</label>
                <input type='checkbox' id="puberty" onChange={() => handleCheckboxChange('puberty')} checked={puberty === 'puberty'} />
              </div>
              <div className="flex gap-2 h-[40px] items-center">
                <label htmlFor="no-puberty" className="text-[#2563eb]">Chưa dậy thì</label>
                <input id="no-puberty" type='checkbox' onChange={() => handleCheckboxChange('no-puberty')} checked={puberty === 'no-puberty'} />
              </div>
            </div>
            <p className="text-[red] text-sm">{errorMessage?.puberty}</p>
          </div>
          <Button variant='primary' onClick={handleSubmit}>Tìm kiếm</Button>
        </div>
      </div>

      {dataResponse && (
        <div className="bg-white p-4 rounded-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold uppercase mb-2">1. Thông tin khách hàng:</h2>
            <ul className="list-disc pl-6">
              <li><strong>Giới tính:</strong> {gender && optionsGender[gender]}</li>
              <li><strong>Tuổi:</strong> {currentAge} tuổi</li>
              <li><strong>Chiều cao:</strong> {currentHeight} cm</li>
              <li><strong>Cân nặng:</strong> {currentWeight} kg</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold uppercase mb-2">2. Đánh giá chỉ số:</h2>
            <ul className="list-disc pl-6">
              <li>
                <p><strong>Chỉ số BMI (Body Mass Index): </strong> {BMI.toFixed(1)} kg/m2</p>
                <p>{ketLuanBMI()}</p>
              </li>
              <li>
                <p><strong>So sánh chiều cao với chuẩn WHO:</strong></p>
                <p>Chiều cao trung bình của bé {gender && optionsGender[gender]} {currentAge} tuổi: <strong>{gender && data_height[gender][Number(currentAge)] - 1.5} cm - {gender && data_height[gender][Number(currentAge)] + 1.5} cm</strong></p>
                <p><strong>Theo chuẩn WHO</strong> chiều cao bé nhà mình {ketLuanChieuCao()}</p>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold uppercase mb-2">3. KẾT LUẬN & GIẢI PHÁP TĂNG CHIỀU CAO VƯỢT TRỘI</h2>
              {ketLuanDayThi()}
              <p><strong>Theo chuẩn WHO</strong> chiều cao bé nhà mình {ketLuanChieuCao()}, {ketLuanCanNang()}</p>
              <p>Hiện trạng của con đang như vậy mà <strong>mẹ quan tâm tìm hiểu sữa bổ sung cho con giai đoạn này là rất phù hợp và kịp thời.</strong></p>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl mb-2 font-semibold">{dataResponse.title}</h2>
              <div className="">
                {dataResponse.content}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xl"><strong>{currentAge} tuổi là giai đoạn vàng để bứt phá chiều cao</strong>, cần bổ sung dưỡng chất đầy đủ để tối ưu hóa tiềm năng phát triển.</p>
              {ketLuanGiaiDoan()}
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold uppercase mb-2">Giải pháp dinh dưỡng:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Dùng sữa Wowtop:</strong> 2 ly/ngày để bổ sung <strong>CBP, canxi, vitamin D3, K</strong> giúp xương chắc khỏe, dài ra nhanh chóng.</li>
                <li><strong>Chế độ ăn khoa học:</strong> Bổ sung nhiều protein (thịt, cá, trứng, sữa), rau xanh, hạn chế đồ ngọt và nước có ga.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold uppercase mb-2">Giải pháp vận động:</h3>
              <ul className="list-disc pl-6">
                <li>Khuyến khích <strong>bơi lội, nhảy dây, đạp xe, chơi bóng rổ</strong> để kích thích xương phát triển.</li>
                <li>Ngủ sớm trước 22h để tăng hormone tăng trưởng tự nhiên.</li>
              </ul>
            </div>
            <p><strong>Dự đoán tiềm năng:</strong> Nếu duy trì chế độ dinh dưỡng và vận động hợp lý, bé có thể đạt chiều cao trên <strong>{heightTo20?.predictedHeightAt20} cm</strong> khi trưởng thành, và có thể cao thêm 5-15 cm so với dự đoán.</p>
          </div>
        </div>
      )}
    </>
  )
}

const ContentWithAuth = withAuth(Content)

export default ContentWithAuth