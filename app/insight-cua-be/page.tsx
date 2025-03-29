'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import React, { JSX, ReactNode, useEffect, useState } from 'react'
import { data_height, data_weight } from '@/constants/data'
import { data_config, Gender } from './data_config'
import withAuth from '@/hocs/withAuth'
import { heightCalculator } from '@/utils/heightCalculator'
import { weightCalculator } from '@/utils/weightCalculator'
import { BMICalculator } from '@/utils/BMICalculator'
import LineChart from './LineChart'
import Image from 'next/image'
import { data_bmi } from './data_bmi'

const optionsGender = {
  BOY: 'Nam',
  GIRL: 'Nữ'
}
function Content() {
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>();
  const [currentAge, setCurrentAge] = useState('');
  const [dataResponse, setDataResponse] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [puberty, setPuberty] = useState<'pre-puberty' | 'puberty' | 'post-puberty' | undefined>()
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

  const handleCheckboxChange = (value: 'pre-puberty' | 'puberty' | 'post-puberty') => {
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

  // const ketLuanDayThi = () => {
  //   if (gender === 'BOY') {
  //     if (+currentAge >= 8 && +currentAge <= 11) {
  //       return <p>Hiện bé nhà mình đang trong giai đoạn <strong>tiền dậy thì nha mẹ</strong></p>
  //     }
  //     if (puberty === 'puberty') {
  //       return <p>Hiện bé nhà mình đang trong giai đoạn <strong>dậy thì nha mẹ</strong></p>
  //     }
  //     return <p>Hiện bé nhà mình đang trong giai đoạn <strong>vàng để phát triền chiều cao và cân nặng nha mẹ</strong></p>
  //   }
  // }

  const ketLuanChieuCao = () => {
    if (+currentHeight < heightBelowStandard) {
      return <span>thấp hơn <strong>{(data_height?.[gender!]?.[+currentAge] - +currentHeight).toFixed(2)} cm</strong> so với tiêu chuẩn</span>
    }
    if (+currentHeight > heightAboveStandard) {
      return <span>cao hơn <strong>{(+currentHeight - data_height?.[gender!]?.[+currentAge]).toFixed(2)} cm</strong> so với tiêu chuẩn</span>
    }
    return <span>đạt chiều cao tiêu chuẩn</span>
  }

  // const ketLuanCanNang = () => {
  //   if (+currentWeight < weightBelowStandard) {
  //     return <strong>nhẹ hơn {(data_weight?.[gender!]?.[+currentAge] - +currentWeight).toFixed(2)} kg so với tiêu chuẩn</strong>
  //   }
  //   if (+currentWeight > weightAboveStandard) {
  //     return <strong>nặng hơn {(+currentWeight - data_weight?.[gender!]?.[+currentAge]).toFixed(2)} kg so với tiêu chuẩn</strong>
  //   }
  //   return <strong>đạt cân nặng tiêu chuẩn</strong>
  // }

  const BMI = (Number(currentWeight)) / ((Number(currentHeight) / 100) * (Number(currentHeight) / 100))
  const ketLuanBMI = () => {
    if (BMI < data_bmi[gender!]['5th'][Number(currentAge)]) {
      return <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, bé nằm trong tình trạng thiếu cân</strong>
    }
    if (BMI >= data_bmi[gender!]['5th'][Number(currentAge)] && BMI < data_bmi[gender!]['85th'][Number(currentAge)]) {
      return <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, Bé có sức khỏe dinh dưỡng tốt</strong>
    }
    if (BMI >= data_bmi[gender!]['85th'][Number(currentAge)] && BMI <= data_bmi[gender!]['95th'][Number(currentAge)]) {
      return <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, Bé có nguy cơ béo phì</strong>
    }
    if (BMI >= data_bmi[gender!]['95th'][Number(currentAge)]) {
      return <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, Bé có nguy cơ béo phì</strong>
    }
  }

  const ketLuanGiaiDoan = () => {
    if (0 < Number(currentAge) && Number(currentAge) < 3) {
      return <p className="text-xl"><strong>Bé đang trong giai đoạn 1000 ngày đầu đời:</strong> Giai đoạn quyết định 50% tiềm năng chiều cao tương lai, cần tập trung vào dinh dưỡng và phát triển xương nền tảng.</p>
    }

    if (puberty === 'pre-puberty' && gender === Gender.GIRL) {
      return <p className="text-xl"><strong>Bé đang trong giai đoạn vàng:</strong> Trẻ phát triển đều đặn mỗi năm tăng 5-6cm, cần đảm bảo bổ sung vi chất và duy trì vận động hợp lý. Nếu dinh dưỡng không đầy đủ 1 năm con thấp hơn bạn bè 5-6cm sau này sẽ rất khó để cao bằng bạn bè trang lứa.</p>
    }
    if (puberty === 'pre-puberty' && gender === Gender.BOY) {
      return <p className="text-xl"><strong>Bé đang trong giai đoạn vàng:</strong> Trẻ phát triển đều đặn mỗi năm tăng 5-6cm, cần đảm bảo bổ sung vi chất và duy trì vận động hợp lý. Nếu dinh dưỡng không đầy đủ 1 năm con thấp hơn bạn bè 5-6cm sau này sẽ rất khó để cao bằng bạn bè trang lứa.</p>
    }

    if (puberty === 'puberty' && gender === Gender.GIRL) {
      return <p className="text-xl"><strong>Giai đoạn dậy thì là giai đoạn bứt phá:</strong> Đây là thời điểm tăng trưởng mạnh nhất trước khi xương đóng sụn. Mỗi năm con có thể cao từ 8-12cm năm.</p>
    }
    if (puberty === 'puberty' && gender === Gender.BOY) {
      return <p className="text-xl"><strong>Giai đoạn dậy thì là giai đoạn bứt phá:</strong> Đây là thời điểm tăng trưởng mạnh nhất trước khi xương đóng sụn. Mỗi năm con có thể cao từ 8-12cm năm.</p>
    }

    if (puberty === 'post-puberty' && gender === Gender.GIRL) {
      return <p className="text-xl"><strong>Giai đoạn sau dậy thì là giai đoạn cuối cùng để tăng chiều cao:</strong> Mỗi năm con sẽ cao thêm 1-2cm, nếu mẹ không nên bỏ lỡ cơ hội cuối cùng này của con.</p>
    }
    if (puberty === 'post-puberty' && gender === Gender.BOY) {
      return <p className="text-xl"><strong>Giai đoạn sau dậy thì là giai đoạn cuối cùng để tăng chiều cao:</strong> Mỗi năm con sẽ cao thêm 1-2cm, nếu mẹ không nên bỏ lỡ cơ hội cuối cùng này của con.</p>
    }
  }

  const heightTo20 = heightCalculator(Number(currentHeight), Number(currentAge), gender as Gender);
  const weightTo20 = weightCalculator(Number(currentWeight), Number(currentAge), gender as Gender);
  const BMI_data = BMICalculator(heightTo20?.heightsByAge, weightTo20?.weightsByAge)

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4 py-4">INSIGHT CỦA BÉ</h1>
      <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
        <h2 className="mb-4 text-xl">Nhập thông tin khách hàng</h2>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col w-1/6">
            <Input label='Chiều cao (cm)' onChange={(e) => setCurrentHeight(e.target.value)} />
            <p className="text-[red] text-sm">{errorMessage?.currentHeight}</p>
          </div>
          <div className="flex flex-col w-1/6">
            <Input label='Cân nặng (kg)' onChange={(e) => setCurrentWeight(e.target.value)} />
            <p className="text-[red] text-sm">{errorMessage?.currentWeight}</p>
          </div>
          <div className="flex flex-col w-1/6">
            <Select options={[{ label: 'Nam', value: 'BOY' }, { label: 'Nữ', value: 'GIRL' }]} label='Giới tính' placeholder='Giới tính' onChange={(e) => setGender(e as Gender)} />
            <p className="text-[red] text-sm">{errorMessage?.gender}</p>
          </div>
          <div className="flex flex-col w-1/6">
            <Input label='Số tuổi' onChange={(e) => setCurrentAge(e.target.value)} />
            <p className="text-[red] text-sm">{errorMessage?.currentAge}</p>
          </div>
          <div className="flex w-1/6 flex-col">
            <div className="flex flex-col">
              <div className="flex gap-2 w-[140px] items-center">
                <label htmlFor="no-puberty" className="text-[#2563eb]">Chưa dậy thì</label>
                <div className="flex justify-end w-full flex-1">
                  <input id="no-puberty" type='checkbox' onChange={() => handleCheckboxChange('pre-puberty')} checked={puberty === 'pre-puberty'} />
                </div>
              </div>
              <div className="flex gap-2 w-[140px] items-center">
                <label htmlFor="puberty" className="text-[#2563eb]">Đang dậy thì</label>
                <div className="flex justify-end w-full flex-1">
                  <input type='checkbox' id="puberty" onChange={() => handleCheckboxChange('puberty')} checked={puberty === 'puberty'} />
                </div>
              </div>
              <div className="flex gap-2 w-[140px] items-center">
                <label htmlFor="puberty" className="text-[#2563eb]">Đã dậy thì</label>
                <div className="flex justify-end w-full flex-1">
                  <input type='checkbox' id="puberty" onChange={() => handleCheckboxChange('post-puberty')} checked={puberty === 'post-puberty'} />
                </div>
              </div>
            </div>
            <p className="text-[red] text-sm">{errorMessage?.puberty}</p>
          </div>
          <Button variant='primary' onClick={handleSubmit}>Tìm kiếm</Button>
        </div>
      </div>

      {dataResponse && (
        <div className="bg-white p-4 rounded-xl">
          <h1 className="text-[#2563eb] uppercase text-4xl mb-4 text-center font-bold">Đánh giá hiện trạng và giải pháp phát triển chiều cao vượt trội</h1>
          <div className="mb-4 bg-insight-item rounded-2xl p-4">
            <h2 className="text-2xl font-semibold uppercase mb-2 text-[#2563eb]">Thông tin khách hàng:</h2>
            <ul className="list-disc pl-6 flex flex-wrap">
              <li className="w-1/2 py-1"><strong>Giới tính:</strong> {gender && optionsGender[gender]}</li>
              <li className="w-1/2 py-1"><strong>Chiều cao:</strong> {currentHeight} cm</li>
              <li className="w-1/2 py-1"><strong>Tuổi:</strong> {currentAge} tuổi</li>
              <li className="w-1/2 py-1"><strong>Cân nặng:</strong> {currentWeight} kg</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold uppercase mb-2 text-[#2563eb]">Đánh giá chỉ số:</h2>
            <div className="flex">
              <div className="py-4 px-8 bg-[#2563eb] rounded-l-2xl text-white text-center flex items-center flex-col justify-center">
                <p className="font-semibold whitespace-nowrap">Chỉ số BMI (Body Mass Index):</p>
                <p className="font-semibold">{BMI.toFixed(1)} kg/m2</p>
              </div>
              <div className="w-full p-4 border-r-2xl bg-insight-item">
                <p>So với chuẩn WHO chiều cao bé nhà mình {ketLuanChieuCao()}. Chiều cao trung bình của bé {gender && optionsGender[gender]} {currentAge} tuổi: <strong>{gender && data_height[gender][Number(currentAge)] - 1.5} cm - {gender && data_height[gender][Number(currentAge)] + 1.5} cm</strong></p>
                <p>{ketLuanBMI()}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/3 full mb-4">
              {gender && <LineChart dataLine={BMI_data!} currentAge={currentAge} gender={gender} BMI={Number(BMI.toFixed(1))} />}
            </div>
            <div className="w-2/3 py-3">
              <div className="mb-4">
                <h2 className="text-2xl text-[#2563eb] font-semibold uppercase mb-2">KẾT LUẬN & GIẢI PHÁP TĂNG CHIỀU CAO VƯỢT TRỘI</h2>
                {ketLuanGiaiDoan()}
              </div>
              <div className="mb-4">
                <h2 className="text-xl mb-2 font-semibold">{dataResponse.title}</h2>
                <div className="">
                  {dataResponse.content}
                </div>
              </div>
              {/* <div className="mb-4 w-full p-4 border-2xl bg-insight-item rounded-2xl">
                {ketLuanGiaiDoan()}
              </div> */}
              <div className="mb-4">
                <h3 className="text-2xl text-[#2563eb] font-semibold uppercase mb-2">Giải pháp dinh dưỡng:</h3>
                <div className="w-full p-4 border-r-2xl bg-insight-item rounded-2xl flex">
                  <div className="w-1/3">
                    <Image src="/lon.png" alt="lon" width={1341} height={989} />
                  </div>
                  <div className="">
                    <p className="text-xl text-[#2563eb] font-bold pl-6 pb-2 border-b-2 border-[#f4d798] mb-2">Dinh dưỡng phát triển chiều cao vượt trội</p>
                    <ul className="list-disc pl-6 py-4">
                      <li className="flex gap-2 py-2">
                        <div className="flex items-start">
                          <Image src="/bt.png" alt="bt" width={28} height={28} />
                        </div>
                        <p>
                          Bổ sung <span className="text-[#2563eb] font-bold">CBP</span> để xây dựng khung xương, tăng hấp thu Canxi vào xương
                        </p>
                      </li>
                      <li className="flex gap-2 py-2">
                        <div className="flex items-start">
                          <Image src="/bt.png" alt="bt" width={28} height={28} />
                        </div>
                        <p>
                          Bổ sung <span className="text-[#2563eb] font-bold">Canxi, vitamin D3, K</span> giúp xương chắc khỏe và dài ra nhanh chóng
                        </p>
                      </li>
                      <li className="flex gap-2 py-2">
                        <div className="flex items-start">
                          <Image src="/bt.png" alt="bt" width={28} height={28} />
                        </div>
                        <p>
                          <span className="text-[#2563eb] font-bold">2 ly Wowtop</span> mỗi ngày để bổ sung đầy đủ dưỡng chất giúp con phát triển chiều cao vượt trội
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Nếu duy trì chế độ dinh dưỡng và vận động hợp lý bé <strong>có thể cao thêm 5-15 cm so với chế độ dinh dưỡng thông thường</strong></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const ContentWithAuth = withAuth(Content)

export default ContentWithAuth