export enum Gender {
  BOY = "BOY",
  GIRL = 'GIRL'
}

export const data_config_height = ({ puberty, heightBelowStandard, heightAboveStandard }: { puberty: "infant" | "pre-puberty" | "puberty" | "post-puberty" | undefined, heightBelowStandard: number, heightAboveStandard: number }) => {
  return (
    [
      { // 0-2 tuổi - Thấp hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightBelowStandard && puberty === 'infant',
        title: <p className="font-semibold">Thấp hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương</p>
            <p>{'-->'} Mẹ cần gấp rút cải thiện chiều cao cho con</p>
          </div>
        )
      },
      { // 0-2 tuổi - Cao hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight > heightAboveStandard && puberty === 'infant',
        // title: <p className="font-semibold">Cao hơn trung bình</p>,
        title: <p className="font-semibold">Cao hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tốc độ của con đang cao hơn, biểu hiện của phát triển sớm. có nguy cơ dậy thì sớm hơn các bạn cùng độ tuổi, đa phần các bé cao hơn rất dễ có tình trạng loãng xương, cốt hóa sớm và ngừng cao sớm do nhu cầu dinh dưỡng cho xương cao hơn bình thường</p>
            <p>{'-->'} Nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con</p>
          </div>
        ),
      },
      { // 0-2 tuổi - Chiều cao trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && puberty === 'infant',
        // title: <p className="font-semibold">Chiều cao trung bình</p>,
        title: <p className="font-semibold">Chiều cao trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng con đang đạt mức trung bình. Với tốc độ này mà ko có dinh dưỡng bổ sung đầy đủ thì khi trưởng thành con gái sẽ đạt khoảng 1m60, con trai 1m70 - thấp hơn chuẩn trung bình của thế giới.</p>
            <p>{'-->'} Mẹ cần kịp thời bổ sung dinh dưỡng cho xương của con</p>
          </div>
        ),
      },
      { // 3-10 tuổi - Thấp hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightBelowStandard && puberty === 'pre-puberty',
        title: <p className="font-semibold">Thấp hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương</p>
            <p>{'-->'} Mẹ cần gấp rút cải thiện chiều cao cho con</p>
          </div>
        )
      },
      { // 3-10 tuổi - Cao hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight > heightAboveStandard && puberty === 'pre-puberty',
        // title: <p className="font-semibold">Cao hơn trung bình</p>,
        title: <p className="font-semibold">Cao hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tốc độ của con đang cao hơn, biểu hiện của phát triển sớm. có nguy cơ dậy thì sớm hơn các bạn cùng độ tuổi, đa phần các bé cao hơn rất dễ có tình trạng loãng xương, cốt hóa sớm và ngừng cao sớm do nhu cầu dinh dưỡng cho xương cao hơn bình thường</p>
            <p>{'-->'} Nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con</p>
          </div>
        ),
      },
      { // 3-10 tuổi - Chiều cao trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && puberty === 'pre-puberty',
        // title: <p className="font-semibold">Chiều cao trung bình</p>,
        title: <p className="font-semibold">Chiều cao trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng con đang đạt mức trung bình. Với tốc độ này mà ko có dinh dưỡng bổ sung đầy đủ thì khi trưởng thành con gái sẽ đạt khoảng 1m60, con trai 1m70 - thấp hơn chuẩn trung bình của thế giới.</p>
            <p>{'-->'} Mẹ cần kịp thời bổ sung dinh dưỡng cho xương của con</p>
          </div>
        ),
      },
      { // dậy thì - Thấp hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightBelowStandard && puberty === 'puberty',
        title: <p className="font-semibold">Thấp hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương</p>
            <p>{'-->'} Mẹ cần gấp rút cải thiện chiều cao cho con</p>
          </div>
        )
      },
      { // dậy thì - Cao hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight > heightAboveStandard && puberty === 'puberty',
        // title: <p className="font-semibold">Cao hơn trung bình</p>,
        title: <p className="font-semibold">Cao hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tốc độ của con đang cao hơn, biểu hiện của phát triển sớm hơn các bạn cùng độ tuổi, đa phần các bé cao hơn rất dễ có tình trạng loãng xương, <strong>cốt hóa sớm và ngừng cao sớm</strong> do nhu cầu dinh dưỡng cho xương cao hơn bình thường.</p>
            <p>{'-->'} Nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con</p>
          </div>
        ),
      },
      { // dậy thì - Chiều cao trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && puberty === 'puberty',
        // title: <p className="font-semibold">Chiều cao trung bình</p>,
        title: <p className="font-semibold">Chiều cao trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng con đang đạt mức trung bình. Với tốc độ này mà ko có dinh dưỡng bổ sung đầy đủ thì khi trưởng thành con gái sẽ đạt khoảng 1m60, con trai 1m70 - thấp hơn chuẩn trung bình của thế giới.</p>
            <p>{'-->'} Mẹ cần kịp thời bổ sung dinh dưỡng cho xương của con</p>
          </div>
        ),
      },
      { // sau dậy thì - Thấp hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightBelowStandard && puberty === 'post-puberty',
        title: <p className="font-semibold">Thấp hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng của con đang ở giai đoạn quan trọng, con đang thấp hơn trung bình, đang là biểu hiện con thiếu dinh dưỡng ở xương, xương không đủ dinh dưỡng, nguyên bào sản sinh ra ít dẫn tới xương không phát triển đều, giảm tốc độ tăng trưởng xương</p>
            <p>{'-->'} Mẹ cần gấp rút cải thiện chiều cao cho con</p>
          </div>
        )
      },
      { // sau dậy thì - Cao hơn trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight > heightAboveStandard && puberty === 'post-puberty',
        // title: <p className="font-semibold">Cao hơn trung bình</p>,
        title: <p className="font-semibold">Cao hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tốc độ của con đang cao hơn, biểu hiện của phát triển sớm hơn các bạn cùng độ tuổi, đa phần các bé cao hơn rất dễ có tình trạng loãng xương,mật độ xương thấp do nhu cầu dinh dưỡng cho xương cao hơn bình thường.</p>
            <p>{'-->'} Nên giai đoạn này kịp thời bổ sung cho dinh dưỡng cho xương của con, đảm bảo mật độ xương tốt nhất cho con</p>
          </div>
        ),
      },
      { // sau dậy thì - Chiều cao trung bình
        condition: ({ currentHeight }: { currentHeight: number }) => currentHeight < heightAboveStandard && currentHeight > heightBelowStandard && puberty === 'post-puberty',
        // title: <p className="font-semibold">Chiều cao trung bình</p>,
        title: <p className="font-semibold">Chiều cao trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về chiều cao:</strong> tình trạng con đang đạt mức trung bình. Với tốc độ này mà ko có dinh dưỡng bổ sung đầy đủ thì khi trưởng thành con gái sẽ đạt khoảng 1m60, con trai 1m70 - thấp hơn chuẩn trung bình của thế giới.</p>
            <p>{'-->'} Mẹ cần kịp thời bổ sung dinh dưỡng cho xương của con</p>
          </div>
        ),
      },
    ]
  )
}

export const data_config_weight = ({ puberty, BMIBelowStandard, BMIAboveStandard }: { puberty: "infant" | "pre-puberty" | "puberty" | "post-puberty" | undefined, BMIBelowStandard: number, BMIAboveStandard: number }) => {
  return (
    [
      { // 0-2 tuổi - Cân nặng dưới trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIBelowStandard && puberty === 'infant',
        title: <p className="font-semibold">Cân nặng dưới trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bị gầy, nhẹ cân; đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém</p>
          </div>
        )
      },
      { // 0-2 tuổi - Cân nặng trên trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI > BMIAboveStandard && puberty === 'infant',
        // title: <p className="font-semibold">Cân nặng trên trung bình</p>,
        title: <p className="font-semibold">Cân nặng trên trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> tình trạng con đang béo, nguy cơ dậy thì sớm, đóng khung xương sớm</p>
            <p>{'-->'} Mẹ cần kiểm soát cân nặng cho con</p>
          </div>
        ),
      },
      { // 0-2 tuổi - Cân nặng trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIAboveStandard && currentBMI > BMIBelowStandard && puberty === 'infant',
        // title: <p className="font-semibold">Cân nặng trung bình</p>,
        title: <p className="font-semibold">Cân nặng trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bình thường ạ</p>
          </div>
        ),
      },
      { // 3-10 tuổi - Cân nặng dưới trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIBelowStandard && puberty === 'pre-puberty',
        title: <p className="font-semibold">Cân nặng trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bị gầy, nhẹ cân; đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém</p>
          </div>
        )
      },
      { // 3-10 tuổi - Cân nặng trên trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI > BMIAboveStandard && puberty === 'pre-puberty',
        // title: <p className="font-semibold">Cao hơn trung bình</p>,
        title: <p className="font-semibold">Cân nặng trên trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> tình trạng con đang béo, nguy cơ dậy thì sớm, đóng khung xương sớm</p>
            <p>{'-->'} Mẹ cần kiểm soát cân nặng cho con</p>
          </div>
        ),
      },
      { // 3-10 tuổi - Cân nặng trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIAboveStandard && currentBMI > BMIBelowStandard && puberty === 'pre-puberty',
        // title: <p className="font-semibold">Chiều cao trung bình</p>,
        title: <p className="font-semibold">Chiều cao trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bình thường ạ</p>
          </div>
        ),
      },
      { // dậy thì - Cân nặng dưới trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIBelowStandard && puberty === 'puberty',
        title: <p className="font-semibold">Cân nặng trên trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bị gầy, nhẹ cân; đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém</p>
          </div>
        )
      },
      { // dậy thì - Cân nặng trên trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI > BMIAboveStandard && puberty === 'puberty',
        // title: <p className="font-semibold">Cao hơn trung bình</p>,
        title: <p className="font-semibold">Cao hơn trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> tình trạng con đang béo, nguy cơ hoocmone giới tính tăng, đóng khung xương sớm.</p>
            <p>{'-->'} Mẹ cần kiểm soát cân nặng cho con</p>
          </div>
        )
      },
      { // dậy thì - Cân nặng trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIAboveStandard && currentBMI > BMIBelowStandard && puberty === 'puberty',
        // title: <p className="font-semibold">Cân nặng trung bình</p>,
        title: <p className="font-semibold">Cân nặng trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bình thường ạ</p>
          </div>
        ),
      },
      { // sau dậy thì -Cân nặng dưới trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIBelowStandard && puberty === 'post-puberty',
        title: <p className="font-semibold">Cân nặng dưới trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bị gầy, nhẹ cân; đang thiếu hụt dinh dưỡng cũng như tỉ lệ hấp thụ kém</p>
          </div>
        )
      },
      { // sau dậy thì - Cân nặng trên trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI > BMIAboveStandard && puberty === 'post-puberty',
        // title: <p className="font-semibold">Cân nặng trên trung bình</p>,
        title: <p className="font-semibold">Cân nặng trên trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> tình trạng con đang béo, nguy cơ hoocmone giới tính tăng, đóng khung xương sớm.</p>
            <p>{'-->'} Mẹ cần kiểm soát cân nặng cho con</p>
          </div>
        )
      },
      { // sau dậy thì - Cân nặng trung bình
        condition: ({ currentBMI }: { currentBMI: number }) => currentBMI < BMIAboveStandard && currentBMI > BMIBelowStandard && puberty === 'post-puberty',
        // title: <p className="font-semibold">Cân nặng trung bình</p>,
        title: <p className="font-semibold">Cân nặng trung bình</p>,
        content: (
          <div className="text-lg font-semibold list-disc">
            <p><strong>Về cân nặng:</strong> con đang bình thường ạ</p>
          </div>
        ),
      },
    ]
  )
}