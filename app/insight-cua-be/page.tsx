'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import React, { JSX, ReactNode, useEffect, useRef, useState } from 'react'
import { data_height } from '@/constants/data'
import { data_config_weight, data_config_height, Gender } from './data_config'
import withAuth from '@/hocs/withAuth'
import { heightCalculator } from '@/utils/heightCalculator'
import { weightCalculator } from '@/utils/weightCalculator'
import { BMICalculator } from '@/utils/BMICalculator'
import LineChart from './LineChart'
import Image from 'next/image'
import { data_bmi } from './data_bmi'
// import { usePDF } from 'react-to-pdf'
import { toast } from 'react-toastify'
import html2canvas from 'html2canvas';

const optionsGender = {
  BOY: 'Nam',
  GIRL: 'Nữ'
}
function Content() {
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>();
  const [currentAge, setCurrentAge] = useState('');
  const [dataResponseHeight, setDataResponseHeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [dataResponseWeight, setDataResponseWeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [puberty, setPuberty] = useState<'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined>()
  const [errorMessage, setErrorMessage] = useState<{ currentHeight?: string, currentWeight?: string, gender?: string, currentAge?: string, puberty?: string }>({
    currentHeight: '',
    currentWeight: '',
    gender: '',
    currentAge: '',
    puberty: ''
  });

  const elementRef = useRef<HTMLDivElement | null>(null);

  // const { toPDF, targetRef } = usePDF({ filename: 'insight-be.pdf' });

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

  const handleCheckboxChange = (value: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty') => {
    if (puberty === value) {
      setPuberty(undefined);
    } else {
      setPuberty(value);
    }
  };

  const heightBelowStandard = data_height?.[gender!]?.[+currentAge] - 2
  const heightAboveStandard = data_height?.[gender!]?.[+currentAge] + 2

  const handleSubmit = () => {
    if (!validateForm()) return;


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

  const ketLuanChieuCao = () => {
    if (+currentHeight < heightBelowStandard) {
      return <span>thấp hơn <strong>{(data_height?.[gender!]?.[+currentAge] - +currentHeight).toFixed(2)} cm</strong> so với tiêu chuẩn</span>
    }
    if (+currentHeight > heightAboveStandard) {
      return <span>cao hơn <strong>{(+currentHeight - data_height?.[gender!]?.[+currentAge]).toFixed(2)} cm</strong> so với tiêu chuẩn</span>
    }
    return <span>đạt chiều cao tiêu chuẩn</span>
  }

  const BMI = (Number(currentWeight)) / ((Number(currentHeight) / 100) * (Number(currentHeight) / 100))
  const ketLuanBMI = () => {
    if (BMI < data_bmi[gender!]['5th'][Number(currentAge)]) {
      return {
        danh_gia_chi_so: <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, bé nằm trong tình trạng thiếu cân</strong>,
        ket_luan: 'Cân nặng dưới trung bình'
      }
    }
    if (BMI >= data_bmi[gender!]['5th'][Number(currentAge)] && BMI < data_bmi[gender!]['85th'][Number(currentAge)]) {
      return {
        danh_gia_chi_so: <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, cân nặng và chiều cao cân đối nha</strong>,
        ket_luan: 'Cân nặng trung bình'
      }
    }
    if (BMI >= data_bmi[gender!]['85th'][Number(currentAge)] && BMI <= data_bmi[gender!]['95th'][Number(currentAge)]) {
      return {
        danh_gia_chi_so: <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, Bé có nguy cơ béo phì</strong>,
        ket_luan: 'Cân nặng trên trung bình'
      }
    }
    if (BMI >= data_bmi[gender!]['95th'][Number(currentAge)]) {
      return {
        danh_gia_chi_so: <strong>Còn về chỉ số cân nặng so với chiều cao của bé, thì chỉ số BMI là {BMI.toFixed(1)} kg/m2, Bé có nguy cơ béo phì</strong>,
        ket_luan: 'Cân nặng trên trung bình'
      }
    }
  }

  const ketLuanGiaiDoan = () => {
    if (0 < Number(currentAge) && Number(currentAge) < 3 || puberty === 'infant') {
      return (
        <div className="text-xl">
          <p>Hiện tại, con đang trong 2 năm đầu đời – giai đoạn quyết định đến 50% chiều cao sau này. Đây là thời điểm xương phát triển nhanh nhất, nếu mẹ bổ sung đầy đủ dinh dưỡng, con sẽ bắt được “sóng tăng trưởng” cực mạnh.</p>
          <br />
          <p>Mỗi tháng con đều có thể cao lên rõ rệt, nhưng nếu thiếu chất, con rất dễ bị chậm tăng trưởng. Giai đoạn này chỉ đến một lần trong đời – mẹ càng bổ sung sớm, con càng có lợi thế chiều cao sau này!</p>
        </div>
      )
    }

    if (puberty === 'pre-puberty') {
      return (
        <div className="text-xl">
          <p>Hiện tại, con đang thuộc giai đoạn tiền dậy thì – đây là giai đoạn “chuẩn bị đà” quan trọng cho bước nhảy vọt về chiều cao ở dậy thì. Nếu mẹ bổ sung dinh dưỡng đúng cách ngay từ bây giờ, xương của con sẽ được xây chắc nền tảng, khung xương dài và khỏe hơn, để khi bước vào dậy thì, con có thể bứt tốc chiều cao vượt trội.</p>
          <br />
          <p>Mỗi năm trẻ có thể tăng 5–6cm, nhưng nếu bắt sóng tốt, con hoàn toàn có thể tăng nhiều hơn. Giai đoạn này là “vàng âm thầm” – không ồn ào như dậy thì, nhưng bỏ lỡ là mất đà phát triển. Mẹ nên đầu tư sớm để con có bước nhảy vọt khi đến tuổi dậy thì nhé!</p>
        </div>
      )
    }

    if (puberty === 'puberty') {
      return (
        <div className="text-xl">
          <p>Hiện tại, con đang trong giai đoạn dậy thì – cơ hội vàng cuối cùng để bứt phá chiều cao. Nếu mẹ bắt sóng tốt, con gái có thể cao thêm 8–12cm/năm, con trai từ 10–14cm/năm.</p>
          <br />
          <p>Tuy nhiên, sau dậy thì, khung xương sẽ đóng lại, chiều cao gần như không còn tăng đáng kể. Vì vậy, đây là thời điểm mẹ cần tăng tốc bổ sung dinh dưỡng và vận động khoa học để con phát triển tối đa. Chỉ vài tháng chậm trễ là con có thể mất đi cơ hội cao vượt trội mãi mãi.</p>
        </div>
      )
    }

    if (puberty === 'post-puberty') {
      return (
        <div className="text-xl">
          <p>Hiện tại, con đã bước qua dậy thì – đây là cơ hội cuối cùng để cải thiện chiều cao. Lúc này, sụn tăng trưởng không còn nhiều, không thể kỳ vọng con cao nhanh, nhưng mẹ hoàn toàn có thể giúp con tăng chiều cao một cách bền vững nếu bổ sung đúng dinh dưỡng và duy trì luyện tập đều đặn.</p>
          <br />
          <p>Giai đoạn này cần tập trung vào tối ưu mật độ xương, xây chắc khung xương và giữ đà tăng trưởng. Đừng bỏ lỡ giai đoạn này, vì sau đó chiều cao sẽ ko thể cải thiện nữa mẹ nhé!</p>
        </div>
      )
    }
  }

  const heightTo20 = heightCalculator(Number(currentHeight), Number(currentAge), gender as Gender);
  const weightTo20 = weightCalculator(Number(currentWeight), Number(currentAge), gender as Gender);
  const BMI_data = BMICalculator(heightTo20?.heightsByAge, weightTo20?.weightsByAge);

  const downloadImage = () => {
    if (!elementRef.current) {
      toast.warning('Bạn phải điền đủ thông tin')
      return;
    }
    html2canvas(elementRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL(`image/png`, 1.0);
      const link = document.createElement('a');
      link.download = 'insight của bé';
      link.href = dataUrl;
      link.click();
    }).catch((error) => {
      console.error('Could not generate image:', error);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold mb-4 py-4">INSIGHT CỦA BÉ</h1>
      <Button
        variant='primary'
        // onClick={() => {
        //   if (!targetRef.current) {
        //     toast.warning('Bạn phải điền đủ thông tin')
        //     return;
        //   }
        //   toPDF()
        // }}
        onClick={downloadImage}
        className="fixed top-6 right-6">
        Xuất PDF
      </Button>
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
                <label htmlFor="infant" className="text-[#2563eb]">0 - 2 tuổi</label>
                <div className="flex justify-end w-full flex-1">
                  <input id="infant" type='checkbox' onChange={() => handleCheckboxChange('infant')} checked={puberty === 'infant'} />
                </div>
              </div>
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

      {(dataResponseHeight && dataResponseWeight) && (
        <div className="bg-white p-4 rounded-xl" ref={elementRef}>
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
                <p>So với chuẩn WHO chiều cao bé nhà mình {ketLuanChieuCao()}. Chiều cao trung bình của bé {gender && optionsGender[gender]} {currentAge} tuổi: <strong>{gender && data_height[gender][Number(currentAge)]} cm</strong></p>
                <p>{ketLuanBMI()?.danh_gia_chi_so}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/3 mb-4">
              {gender && <LineChart dataLine={BMI_data!} currentAge={currentAge} gender={gender} BMI={Number(BMI.toFixed(1))} />}
            </div>
            <div className="w-2/3 py-3">
              <h2 className="text-xl flex justify-center mb-2 font-semibold py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">{dataResponseHeight.title} <span className="mx-2">-</span> {ketLuanBMI()?.ket_luan}</h2>
              <div className="mb-4">
                <h2 className="text-2xl text-[#2563eb] font-semibold uppercase mb-2">KẾT LUẬN & GIẢI PHÁP TĂNG CHIỀU CAO VƯỢT TRỘI</h2>
              </div>
              <div className="mb-4">
                <div className="">
                  {dataResponseHeight.content}
                  {dataResponseWeight.content}
                </div>
              </div>
              <div className="mb-4 w-full p-4 border-2xl bg-insight-item rounded-2xl">
                {ketLuanGiaiDoan()}
              </div>
              <div className="mb-4">
                <h3 className="text-2xl text-[#2563eb] font-semibold uppercase mb-2">Giải pháp dinh dưỡng:</h3>
                <div className="w-full p-4 border-r-2xl bg-insight-item rounded-2xl flex">
                  <div className="w-1/3 flex items-center">
                    <Image unoptimized src="/lon.png" alt="lon" width={1341} height={989} />
                  </div>
                  <div className="">
                    <p className="text-xl text-[#2563eb] font-bold pl-6 pb-2 border-b-2 border-[#f4d798] mb-2">Dinh dưỡng phát triển chiều cao vượt trội</p>
                    <ul className="list-disc pl-6 py-4">
                      <li className="flex gap-2 py-2">
                        <div className="flex items-start w-7 h-7 justify-center">
                          <Image unoptimized src="/bt.png" alt="bt" width={28} height={28} className="w-full" />
                        </div>
                        <p className="flex-1">
                          Bổ sung <span className="text-[#2563eb] font-bold">CBP</span> để xây dựng khung xương, tăng hấp thu Canxi vào xương
                        </p>
                      </li>
                      <li className="flex gap-2 py-2">
                        <div className="flex items-start w-7 h-7 justify-center">
                          <Image unoptimized src="/bt.png" alt="bt" width={28} height={28} className="w-full" />
                        </div>
                        <p className="flex-1">
                          Bổ sung <span className="text-[#2563eb] font-bold">Canxi, vitamin D3, K</span> giúp xương chắc khỏe và dài ra nhanh chóng
                        </p>
                      </li>
                      <li className="flex gap-2 py-2">
                        <div className="flex items-start w-7 h-7 justify-center">
                          <Image unoptimized src="/bt.png" alt="bt" width={28} height={28} className="w-full" />
                        </div>
                        <p className="flex-1">
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
    </div>
  )
}

const ContentWithAuth = withAuth(Content)

export default ContentWithAuth