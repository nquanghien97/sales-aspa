export enum Gender {
  BOY = "BOY",
  GIRL = 'GIRL'
}

export const data_config = ({ heightBelowStandard, heightAboveStandard, weightBelowStandard, weightAboveStandard } : { heightBelowStandard: number, heightAboveStandard: number, weightBelowStandard: number, weightAboveStandard: number }) => {
  return ( 
    [
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number, currentAge: number, gender: Gender }) => currentHeight < heightBelowStandard && currentWeight < weightBelowStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Thấp hơn trung bình - Cân nặng dưới trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Bé có biếng ăn không me?</li>
            <li>Hiện tại, tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương!</li>
            <li>Ngoài ra, con đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém.</li>
            <li>Mẹ cần gấp rút cải thiện chiều cao và cân nặng cho con!</li>
          </ul>
        )
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number, currentAge: number, gender: Gender }) => currentHeight < heightBelowStandard && currentWeight > weightAboveStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Thấp hơn trung bình - Cân nặng trên trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Hiện tại con đang béo nguy cơ gây dậy thì sớm, đóng khung xương sớm. Báo động ảnh hưởng tới chiều cao, cần kiểm soát lại.</li>
            <li>Tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương.</li>
            <li>Mẹ cần gấp rút cải thiện chiều cao và cân nặng cho con!</li>
          </ul>
        ),
      }, 
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight < heightBelowStandard && currentWeight > weightBelowStandard && currentWeight < heightAboveStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Thấp hơn trung bình - Cân nặng trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương.</li>
            <li>Mẹ cần gấp rút cải thiện chiều cao cho con</li>
          </ul>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight > heightAboveStandard && currentWeight < weightBelowStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Cao hơn trung bình - Cân nặng dưới trung bình</p>,
        content: (
          <ul className="text-lg font-semibold px-8 list-disc">
            <li>Bé có biếng ăn không mẹ?</li>
            <li>Hiện tại, con đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém</li>
            <li>Về chiều cao thì tốc độ của con đang cao hơn, đa phần các bé cao hơn dễ có tình trạng loãng xương do nhu cầu dinh dưỡng cho xương cao hơn bình thưỡng, nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con.</li>
          </ul>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight > heightAboveStandard && currentWeight > weightAboveStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Cao hơn trung bình - Cân nặng trên trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Hiện tại con đang béo nguy cơ gây dậy thì sớm, đóng khung xương sớm, cần kiểm soát lại.</li>
            <li>Về chiều cao thì tốc độ của con đang cao hơn, biểu hiện của dậy thì sớm hơn các bạn cùng độ tuổi, đa phần các bé cao hơn dễ có tình trạng loãng xương do nhu cầu dinh dưỡng cho xương cao hơn bình thường, nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con.</li>
          </ul>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight > heightAboveStandard && currentWeight > weightBelowStandard && currentWeight < weightAboveStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Cao hơn trung bình - Cân nặng trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Con cân nặng ở mức trung bình, như này là phù hợp</li>
            <li>Nhưng về chiều cao thì tốc độ của con đang cao hơn, đa phần các bé cao hơn dễ có tình trạng loãng xương do nhu cầu dinh dưỡng cho xương cao hơn bình thường, nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con.</li>
          </ul>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && currentWeight < weightBelowStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Chiều cao trung bình - Cân nặng dưới trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Bé có biếng ăn không mẹ?</li>
            <li>Hiện tại, con đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém</li>
            <li>Giai đoạn của con chiều cao đang ở mức trung bình. Với tốc độ này thì con gái ở tuổi 20 đạt 1m60, con trai 1m70. Giai đoạn này mẹ nên bổ sung kịp thời cho con thì chiều cao có thể lên tới 1m7 - 1m8</li>
          </ul>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && currentWeight > weightAboveStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Chiều cao trung bình - Cân nặng trên trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Hiện tại con đang béo nguy cơ gây dậy thì sớm, đóng khung xương sớm. Báo động ảnh hưởng tới chiều cao, cần kiểm soát lại.</li>
            <li>Giai đoạn của con chiều cao đang ở mức trung bình. Với tốc độ này thì con gái ở tuổi 20 đạt 1m60, con trai 1m70. Giai đoạn này mẹ nên bổ sung kịp thời cho con thì chiều cao có thể lên tới 1m7 - 1m8.</li>
          </ul>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight } : { currentHeight: number, currentWeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && currentWeight < heightAboveStandard && currentWeight > heightBelowStandard,
        title: <p className="py-2 px-4 bg-[#2563eb] rounded-2xl text-white text-center">Chiều cao trung bình - Cân nặng trung bình</p>,
        content: (
          <ul className="text-lg font-semibold list-disc px-8">
            <li>Hiện tại, con cân nặng ở mức trung bình, như này là phù hợp.</li>
            <li>Về chiều cao, Giai đoạn này của con đang ở mức trung bình. Với tốc độ này thì con gái ở tuổi 20 đạt 1m60, con trai 1m70. Giai đoạn này mẹ nên bổ sung kịp thời cho con thì chiều cao có thể lên tới 1m7 - 1m8</li>
          </ul>
        ),
      }
    ]
  )
}