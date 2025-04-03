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
    <Modal
      open={open}
      className="!p-0 !w-3/4 !h-screen !top-2"
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
      />
    </Modal>
  )
}

export default Insight