import { Button } from '@/components/ui/Button';
import { Modal } from 'antd';
import Image from 'next/image';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { toast } from 'react-toastify';

interface MaturationProcessProps {
  open: boolean
  onClose: () => void
  currentAge: number
}

function MaturationProcess(props: MaturationProcessProps) {
  const { open, onClose } = props;

  const elementRef = useRef<HTMLDivElement | null>(null);

  const downloadImage = () => {
    if (!elementRef.current) {
      toast.warning('Bạn phải điền đủ thông tin')
      return;
    }
    html2canvas(elementRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL(`image/png`, 1.0);
      const link = document.createElement('a');
      link.download = 'hanh-trinh-truong-thanh';
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
      <div className="absolute top-2 right-16 z-[100]">
        <Button
          variant='primary'
          onClick={downloadImage}
        >
          Xuất File
        </Button>
      </div>
      <div ref={elementRef} className="bg-[url('/bgr.png')] bg-[length:100%_100%]">
        <div className="p-4 flex justify-between">
          <Image src="/logo-ngang.png" unoptimized alt='logo' width={200} height={150} />
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-md text-center mb-4"
          style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.8)" }}
        >
          3 Giai đoạn tăng chiều cao
        </h2>
        <div className="flex gap-6 mb-8 p-4 w-full">
          <div className="w-1/3 px-8 flex flex-col">
            <div className="mb-2">
              <Image src="/gd1.png" alt="gd1" width={829} height={327} />
            </div>
            <div className="flex-1 bg-amber-100 p-4 rounded-lg shadow-xl-custom border-2 border-white">
              <ul className="text-blue-800 space-y-2">
                <li>- Trẻ ăn ngon miệng hơn, ngủ sâu giấc, da hồng hào hơn.</li>
                <li>- Tiêu hóa ổn định, giảm táo bón và đầy bụng.</li>
                <li>- Chiều cao chưa thay đổi rõ, nhưng có thể bắt đầu thích nghi tốt với dinh dưỡng.</li>
              </ul>
            </div>
          </div>

          <div className="w-1/3 px-8 flex flex-col">
            <div className="mb-2">
              <Image src="/gd2.png" alt="gd2" width={829} height={327} />
            </div>
            <div className="flex-1 bg-amber-100 p-4 rounded-lg shadow-xl-custom border-2 border-white">
              <ul className="text-blue-800 space-y-2">
                <li>- Đáng con cao thẳng hơn, chân duỗi dài, vai mở rộng.</li>
                <li>- Quần áo bắt đầu chật và thích vận động hơn trước.</li>
                <li>- Chiều cao có dấu hiệu tăng đều đặn</li>
              </ul>
            </div>
          </div>

          <div className="w-1/3 px-8 flex flex-col">
            <div className="mb-2">
              <Image src="/gd3.png" alt="gd3" width={829} height={327} />
            </div>
            <div className="flex-1 bg-amber-100 p-4 rounded-lg shadow-xl-custom border-2 border-white">
              <ul className="text-blue-800 space-y-2">
                <li>- Trẻ cao rõ rệt, thay đổ thấy áo cộc, quần ngắn nhanh chóng.</li>
                <li>- Thần thái tự tin, năng động hơn, bắt đầu so chiều cao với bạn bè.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-3xl font-bold text-blue-600 uppercase mb-8 text-center">Hiệu quả tăng chiều cao</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-amber-300">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center align-middle"
                  >
                    GIAI ĐOẠN
                  </th>
                  <th
                    colSpan={1}
                    className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center"
                  >
                    GIAI ĐOẠN 1: THÍCH NGHI
                  </th>
                  <th
                    colSpan={2}
                    className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center"
                  >
                    GIAI ĐOẠN 2: NỀN MÓNG
                  </th>
                  <th
                    colSpan={3}
                    className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center"
                  >
                    GIAI ĐOẠN 3: TĂNG TỐC
                  </th>
                  <th
                    rowSpan={2}
                    className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center align-middle"
                  >
                    TỔNG
                  </th>
                </tr>
                <tr>
                  <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center">
                    THÁNG 1
                  </th>
                  <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center">
                    THÁNG 2
                  </th>
                  <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center">
                    THÁNG 3
                  </th>
                  <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center">
                    THÁNG 4
                  </th>
                  <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center">
                    THÁNG 5
                  </th>
                  <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center">
                    THÁNG 6
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    1-2 tuổi
                  </td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.8 – 1.3 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.1 – 1.6 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.3 – 1.8 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.5 – 2.1 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.6 – 2.2 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.6 – 2.3 cm</td>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    7.9 – 11.3 cm
                  </td>
                </tr>
                <tr>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    3-9 tuổi
                  </td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.2 – 0.5 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.4 – 0.7 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.5 – 0.9 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.7 – 1.2 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.8 – 1.4 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.9 – 1.5 cm</td>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    3.5 – 6.2 cm
                  </td>
                </tr>
                <tr>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    10-14 tuổi
                  </td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.4 – 0.7 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.6 – 1.0 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.8 – 1.3 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.0 – 1.5 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.0 – 1.6 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">1.0 – 1.7 cm</td>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    4.8 – 7.8 cm
                  </td>
                </tr>
                <tr>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    15-18 tuổi
                  </td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.1 – 0.2 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.2 – 0.3 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.3 – 0.4 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.4 – 0.6 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.4 – 0.6 cm</td>
                  <td className="border border-amber-300 bg-white p-3 text-blue-700 text-center">0.4 – 0.7 cm</td>
                  <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center">
                    1.8 – 3.0 cm
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* hành trình trưởng thành */}
        <div className="relative w-full p-4 overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-md"
                style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.8)" }}
              >
                HÀNH TRÌNH TRƯỞNG THÀNH
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-amber-300">
                {/* Header row */}
                <thead>
                  <tr>
                    <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center w-1/6"></th>
                    <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center w-1/3">
                      GIAI ĐOẠN 1: THÍCH NGHI
                    </th>
                    <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center w-1/3">
                      GIAI ĐOẠN 2: NỀN MÓNG
                    </th>
                    <th className="border border-amber-300 bg-amber-100 p-3 text-blue-700 font-bold text-center w-1/3">
                      GIAI ĐOẠN 3: TĂNG TỐC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1: MỤC TIÊU */}
                  <tr>
                    <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center align-middle">
                      MỤC TIÊU
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- Thích nghi với nguồn dinh dưỡng mới (protein, khoáng, lợi khuẩn...)</li>
                        <li>- Tái thiết lập hệ vi sinh vật đường ruột + nâng cao hấp thu</li>
                        <li>- Khởi động nhe trục nội tiết GH – IGF-1</li>
                        <li>- Ổn định giấc ngủ – vận động + chuẩn bị nền tảng sinh học</li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- Tái thiết lập cấu trúc xương</li>
                        <li>- Tăng hoạt hóa hormone GH - IGF-1 và ổn định trục nội tiết tăng trưởng</li>
                        <li>- Chuẩn bị đầy mạnh sụn tăng trưởng</li>
                        <li>- Thiết lập &quot;môi trường sinh học&quot; sẵn sàng cho giai đoạn tăng tốc (tháng 4-6)</li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- Sụn tăng trưởng hoạt động mạnh</li>
                        <li>- IGF-1 đạt đỉnh + kéo dài xương rõ rệt</li>
                        <li>- Khoáng hóa xương hiệu quả – tăng mật độ và độ dài xương</li>
                        <li>- Chiều cao tăng rõ (1-3cm trong 3 tháng)</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Row 2: CƠ SỞ KHOA HỌC */}
                  <tr>
                    <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center align-middle">
                      CƠ SỞ
                      <br />
                      KHOA HỌC
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>
                          - Cơ thể cần 2-4 tuần để điều chỉnh enzym tiêu hóa, hệ vi sinh đường ruột phù hợp với nguồn
                          protein, khoáng chất, và đường chất mới.
                        </li>
                        <li>
                          - Cơ thể tái tạo microbiome ảnh hưởng trực tiếp đến hấp thu canxi, magie, kẽm – khoáng chất quan
                          trọng cho xương.
                        </li>
                        <li>- GH chưa tiết mạnh nếu giấc ngủ, vận động chưa ổn</li>
                        <li>- IGF-1 chưa đủ mạnh để làm tăng trưởng chiều cao ngay</li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>
                          - Quá trình tạo xương mới (ossification) cần đủ collagen, canxi, vitamin D, K1, magie và hormon
                          IGF-1.
                        </li>
                        <li>
                          - GH – IGF-1 chỉ tăng đáng kể sau 6-8 tuần can thiệp đồng bộ: ngủ đủ, vận động, dinh dưỡng đầy đủ.
                        </li>
                        <li>
                          - Sụn tăng trưởng ở đầu xương dài bắt đầu chuyển hóa mạnh mẽ sau khi có thể ổn định dinh dưỡng và
                          nội tiết
                        </li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- GH – IGF-1 hoạt động đồng pha.IGF-1 đạt đỉnh sinh học sau 3 tháng can thiệp</li>
                        <li>- Sụn tăng trưởng (growth plate) được hoạt hóa tối đa + xương dài ra từng mm theo tuần.</li>
                        <li>- Giấc ngủ sâu + vận động + dinh dưỡng đúng = tạo đỉnh tăng trưởng</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Row 3: DẪN CHỨNG */}
                  <tr>
                    <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center align-middle">
                      DẪN CHỨNG
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm italic">
                        <li>
                          - ESPGHAN (2022): Giai đoạn đầu khi bắt đầu can thiệp dinh dưỡng cần ít nhất 4 tuần để điều chỉnh
                          hệ vi sinh và enzym tiêu hóa, tạo điều kiện cho chuyển hóa khoáng chất.
                        </li>
                        <li>
                          - Journal of Pediatric Gastroenterology and Nutrition (2021): Trẻ có hệ vi sinh khỏe mạnh hấp thu
                          Canxi hiệu quả hơn 35%
                        </li>
                        <li>
                          - Ấn Độ (2016): Sau 4 tuần uống sữa giàu đạm + D3, mức hấp thu Canxi và IGF-1 nội sinh đều tăng
                          đáng kể.
                        </li>
                        <li>
                          - Physiology of the Endocrine System (Elsevier, 2020): GH phụ thuộc mạnh vào giấc ngủ sâu – ban
                          đầu GH còn chưa tiết ổn định do chưa đủ nguyên liệu & sinh lý nền.
                        </li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm italic">
                        <li>
                          - Clinical Nutrition (2018): Sau 6-12 tuần can thiệp protein + vi chất + mật độ khoáng xương tăng
                          trung bình 6.7-9.4%.
                        </li>
                        <li>
                          - WHO Growth Chart (2006): Biểu đồ chiều cao có thể chưa thay đổi trong tháng 1, nhưng sẽ bắt đầu
                          dốc lên từ tháng 2-3 nếu dinh dưỡng ổn định.
                        </li>
                        <li>
                          - Physiology of Bone - Elsevier (2021): IGF-1 cần thời gian tích lũy để kích thích tăng trưởng
                          thực sự ở sụn tăng trưởng.
                        </li>
                        <li>
                          - J Nutr Biochem (2013): CBP và CPP có vai trò tăng biểu hiện gen điều hòa xương, đặc biệt trong
                          giai đoạn nền từ tuần 5 trở đi.
                        </li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm italic">
                        <li>
                          - Meta-analysis (2022 – 12 nghiên cứu châu Á): Trẻ được can thiệp đồng bộ phương pháp trong 6
                          tháng: 65-80% chiều cao tăng thêm nằm trong 3 tháng cuối.
                        </li>
                        <li>
                          - Journal of Clinical Endocrinology & Metabolism (2019): Nồng độ IGF-1 nội sinh đạt đỉnh sinh học
                          sau 12 tuần can thiệp đồng bộ.
                        </li>
                        <li>
                          - Korean Pediatric Society (2021): Trẻ ngủ sâu và vận động hợp lý tăng GH cao gấp 5-7 lần nhóm rối
                          loạn giấc ngủ.
                        </li>
                      </ul>
                    </td>
                  </tr>

                  {/* Row 4: TÁC ĐỘNG WOWTOP */}
                  <tr>
                    <td className="border border-amber-300 bg-amber-50 p-3 text-blue-700 font-bold text-center align-middle">
                      TÁC ĐỘNG
                      <br />
                      WOWTOP
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- Cung cấp FOS, GOS, BB12 + phục hồi lợi khuẩn ruột, tối ưu hấp thu Canxi & Đạm.</li>
                        <li>- OPO giúp giảm táo bón – tăng khả năng chuyển hóa chất béo & canxi trong sữa mẹ.</li>
                        <li>- CBP & CPP bắt đầu hoạt động từ sớm, tạo tiền đề tăng IGF-1 nội sinh.</li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- CBP (125mg/100g): kích thích nguyên bào xương, tăng IGF-1</li>
                        <li>- CPP (571mg/100g): tăng hấp thu Canxi vào xương gấp 2 lần</li>
                        <li>- Canxi + D3 + K1 + Phospho: khoáng hóa tối ưu, tỷ lệ Ca/P ≈ 1.8 + sinh học lý tưởng</li>
                        <li>- Magie, Kẽm, Collagen thủy phân: hỗ trợ enzym xương – chống mất xương</li>
                      </ul>
                    </td>
                    <td className="border border-amber-300 bg-white p-3 text-blue-700">
                      <ul className="list-none space-y-2 text-sm">
                        <li>- CBP + CPP tiếp tục thúc đẩy tăng sinh mô xương</li>
                        <li>- Choline, DHA, Lactoferrin cải thiện giấc ngủ sâu + tăng tiết GH</li>
                        <li>
                          - Tăng cường hấp thu vi khoáng & kháng thể (IgG) + cơ thể khỏe mạnh, không gián đoạn tăng trưởng
                        </li>
                        <li>- Trẻ ăn khỏe, ngủ tốt, vận động tốt + môi trường hoàn hảo để phát triển chiều cao</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MaturationProcess