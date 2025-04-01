enum Gender {
  BOY = "BOY",
  GIRL = 'GIRL'
}
export const case_comment = (heightStandard: number, weightStandard: number) => {
  return (
    [
      {
        condition: ({ currentHeight, currentWeight, currentAge, gender } : { currentHeight: number, currentWeight: number, currentAge: number, gender: Gender }) => currentHeight < heightStandard && currentWeight < weightStandard && currentAge < 10 &&  gender === "GIRL",
        content: (
          <div className="text-lg font-semibold">
            <p>Con đang ở <strong>GIAI ĐOẠN &quot;VÀNG&quot; để phát triển chiều cao</strong></p>
            <p className="italic">Bố mẹ cần lưu ý để phát triển chiều cao tối ưu cho con ở giai đoạn này. Bởi vì, khi con bước vào GIAI ĐOẠN DẬY THÌ, con sẽ còn rất ít thời gian và cơ hội để cao.</p>
            <p className="italic">Ở độ tuổi 20 con vẫn có thể <strong>cao hơn 5 - 15cm</strong> kết quả dự báo nếu được chú trọng bổ sung dinh dưỡng, luyện tập và chế độ sinh hoạt ngay từ bây giờ</p>
          </div>
        )
      },
      {
        condition: ({ currentHeight, currentWeight, currentAge, gender } : { currentHeight: number, currentWeight: number, currentAge: number, gender: Gender }) => currentHeight < heightStandard && currentWeight < weightStandard && currentAge >= 10 &&  gender === "GIRL",
        content: (
          <div className="text-lg font-semibold">
            <p>Con đang ở <strong>GIAI ĐOẠN DẬY THÌ</strong> và là <strong>thời điểm cuối cùng để phát triển chiều cao</strong></p>
            <p className="italic">Bố mẹ cần lưu ý để phát triển chiều cao tối ưu cho con ở giai đoạn này. Bởi vì, qua giai đoạn dậy thì con không còn cơ hội để có thể cao hơn nữa</p>
            <p className="italic">Ở độ tuổi 20 con vẫn có thể <strong>cao hơn 5 - 15cm</strong> kết quả dự báo nếu được chú trọng bổ sung dinh dưỡng, luyện tập và chế độ sinh hoạt ngay từ bây giờ</p>
          </div>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight, currentAge, gender } : { currentHeight: number, currentWeight: number, currentAge: number, gender: Gender }) => currentHeight < heightStandard && currentWeight < weightStandard && currentAge < 12 &&  gender === "BOY",
        content: (
          <div className="text-lg font-semibold">
            <p>Con đang ở <strong>GIAI ĐOẠN &quot;VÀNG&quot; để phát triển chiều cao</strong></p>
            <p className="italic">Bố mẹ cần lưu ý để phát triển chiều cao tối ưu cho con ở giai đoạn này. Bởi vì, khi con bước vào GIAI ĐOẠN DẬY THÌ, con sẽ còn rất ít thời gian và cơ hội để cao.</p>
            <p className="italic">Ở độ tuổi 20 con vẫn có thể <strong>cao hơn 5 - 15cm</strong> kết quả dự báo nếu được chú trọng bổ sung dinh dưỡng, luyện tập và chế độ sinh hoạt ngay từ bây giờ</p>
          </div>
        ),
      },
      {
        condition: ({ currentHeight, currentWeight, currentAge, gender } : { currentHeight: number, currentWeight: number, currentAge: number, gender: Gender }) => currentHeight < heightStandard && currentWeight < weightStandard && currentAge <=12 &&  gender === "BOY",
        content: (
          <div className="text-lg font-semibold">
            <p>Con đang ở <strong>GIAI ĐOẠN &quot;VÀNG&quot; để phát triển chiều cao</strong></p>
            <p className="italic">Bố mẹ cần lưu ý để phát triển chiều cao tối ưu cho con ở giai đoạn này. Bởi vì, khi con bước vào GIAI ĐOẠN DẬY THÌ, con sẽ còn rất ít thời gian và cơ hội để cao.</p>
            <p className="italic">Ở độ tuổi 20 con vẫn có thể <strong>cao hơn 5 - 15cm</strong> kết quả dự báo nếu được chú trọng bổ sung dinh dưỡng, luyện tập và chế độ sinh hoạt ngay từ bây giờ</p>
          </div>
        ),
      }
    ]
  )
}