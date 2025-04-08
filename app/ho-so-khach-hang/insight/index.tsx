import Body from '@/app/insight-cua-be/Body';
import { data_bmi } from '@/app/insight-cua-be/data_bmi';
import { data_config_height, data_config_weight } from '@/app/insight-cua-be/data_config';
import { Button } from '@/components/ui/Button';
import { data_height } from '@/constants/data';
import { Gender } from '@/utils/heightCalculator';
import { Modal } from 'antd';
import React, { JSX, ReactNode, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';

interface InsightProps {
  open?: boolean;
  onClose?: () => void;
  gender: Gender | undefined
  currentHeight: string
  currentAge: string
  currentWeight: string
  puberty: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined;
  phoneNumber?: string
  fullName?: string
}

function Insight(props: InsightProps) {
  const {
    open,
    onClose,
    gender,
    currentHeight,
    currentAge,
    currentWeight,
    puberty,
    phoneNumber,
    fullName
  } = props;

  const [dataResponseHeight, setDataResponseHeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();
  const [dataResponseWeight, setDataResponseWeight] = useState<{ title?: ReactNode, content?: JSX.Element }>();

  const elementRef = useRef<HTMLDivElement | null>(null);

  const heightBelowStandard = data_height?.[gender!]?.[+currentAge] - 2
  const heightAboveStandard = data_height?.[gender!]?.[+currentAge] + 2

  const BMI = (Number(currentWeight)) / ((Number(currentHeight) / 100) * (Number(currentHeight) / 100))

  useEffect(() => {
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
  }, [BMI, currentAge, currentHeight, gender, heightAboveStandard, heightBelowStandard, puberty])

  const downloadImage = () => {
    if (!elementRef.current) {
      toast.warning('Bạn phải điền đủ thông tin');
      return;
    }
  
    // 1. Chuẩn bị các biến cần thiết
    const exportWidth = 2040;
    const chartWidth = 1000; // Kích thước lớn hơn cho chart
    const originalStyles = {
      container: {
        width: elementRef.current.style.width,
        height: elementRef.current.style.height,
      },
      charts: [] as {width: string, height: string}[],
    };
  
    // 2. Tìm tất cả các chart và lưu lại trạng thái ban đầu
    const charts = elementRef.current.querySelectorAll('canvas');
    originalStyles.charts = Array.from(charts).map(chart => ({
      width: (chart as HTMLElement).style.width,
      height: (chart as HTMLElement).style.height,
    }));
  
    // 3. Áp dụng kích thước mới
    elementRef.current.style.width = `${exportWidth}px`;
    elementRef.current.style.height = 'auto';
    
    // 4. Đặc biệt xử lý các chart
    Array.from(charts).forEach((chart) => {
      const chartElement = chart as HTMLElement;
      chartElement.style.width = `${chartWidth}px`;
      chartElement.style.height = `${chartWidth * 0.6}px`; // Tỷ lệ 5:3
      
      // Quan trọng: Đặt lại thuộc tính cho canvas
      chartElement.setAttribute('width', chartWidth.toString());
      chartElement.setAttribute('height', (chartWidth * 0.6).toString());
      
      // Thêm style để đảm bảo hiển thị đúng
      chartElement.style.maxWidth = '100%';
      chartElement.style.objectFit = 'contain';
    });
  
    // 5. Thêm delay để đảm bảo DOM cập nhật
    setTimeout(() => {
      html2canvas(elementRef.current!, {
        scale: 3, // Scale cao hơn cho chất lượng tốt
        logging: false,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: exportWidth,
        width: exportWidth,
        height: elementRef.current!.scrollHeight,
      }).then((canvas) => {
        // 6. Khôi phục lại tất cả style gốc
        elementRef.current!.style.width = originalStyles.container.width;
        elementRef.current!.style.height = originalStyles.container.height;
        
        Array.from(charts).forEach((chart, index) => {
          const chartElement = chart as HTMLElement;
          chartElement.style.width = originalStyles.charts[index].width;
          chartElement.style.height = originalStyles.charts[index].height;
          chartElement.setAttribute('width', '');
          chartElement.setAttribute('height', '');
        });
  
        // 7. Tạo và download ảnh
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = `insight-cua-be-${new Date().toISOString().slice(0,10)}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      }).catch((error) => {
        console.error('Export error:', error);
        // Đảm bảo luôn khôi phục style khi có lỗi
        elementRef.current!.style.width = originalStyles.container.width;
        elementRef.current!.style.height = originalStyles.container.height;
        Array.from(charts).forEach((chart, index) => {
          const chartElement = chart as HTMLElement;
          chartElement.style.width = originalStyles.charts[index].width;
          chartElement.style.height = originalStyles.charts[index].height;
        });
      });
    }, 300); // Delay 300ms để đảm bảo render xong
  };

  return (
    <Modal
      open={open}
      className="!p-0 !w-full !h-screen !top-2"
      onCancel={onClose}
      footer={false}
      wrapClassName='!p-0'
    >
      <div className="flex pt-4 px-4">
        <Button
          variant='primary'
          onClick={downloadImage}
        >
          Xuất File
        </Button>
      </div>
      <Body
        heightBelowStandard={heightBelowStandard}
        heightAboveStandard={heightAboveStandard}
        dataResponseHeight={dataResponseHeight}
        dataResponseWeight={dataResponseWeight}
        BMI={BMI}
        gender={gender}
        currentHeight={currentHeight}
        currentAge={currentAge}
        currentWeight={currentWeight}
        puberty={puberty}
        elementRef={elementRef}
        phoneNumber={phoneNumber}
        fullName={fullName}
      />
    </Modal>
  )
}

export default Insight