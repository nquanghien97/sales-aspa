import React from 'react'
import ListCustomers from './ListCustomers'

function page() {
  return (
    <div className="mx-auto px-4">
      <h1 className="text-center text-4xl font-bold mb-4 py-4">CHỐT</h1>
      <div className="flex gap-2">
        <div className="overflow-x-auto w-2/3">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border bg-[#d8e4bc] p-2 text-center font-medium border-black">TỰ DUY, PHÂN TÍCH</th>
                <th className="border bg-[#d8e4bc] p-2 text-center font-medium border-black">KỊCH BẢN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 border-y-black border-l-black bg-[#d8e4bc] p-2 align-top font-medium" rowSpan={2}>Nhấn vào điểm 10 tin vào chính mình: có nhiều khách hàng giống bạn</td>
                <td className="border border-gray-400 p-2 text-justify border-r-black">
                  <p>Không biết mẹ A đang sinh sống và làm việc ở đâu</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 border-y-black p-2 text-justify border-r-black">À ở tỉnh X đúng ko ạ. Ở X em hỗ trợ nhiều mẹ lắm, hôm nay cũng có 4,5 mẹ mới đặt 1 thùng, có mẹ Lan ở huyện..., mẹ Xuân là bác sĩ bên (huyện ...) ấy ạ.</td>
              </tr>

              <tr>
                <td className="border border-gray-400 border-y-black border-l-black bg-[#d8e4bc] p-2 align-top font-medium" rowSpan={3}>CHỐT</td>
                <td className="border border-gray-400 p-2 text-justify border-r-black">
                  <p>Vâng và khi mà mình sử dụng thì 1 lon là được khoảng tầm 15 đến 20 ngày thì đang được ưu đãi chương trình ưu đãi tốt thì đang được giảm từ 1,2 triệu xuống còn có 965.000 thôi. Nhưng mà mẹ lấy 3 lon thì đang được giảm còn 830.000đ một lon. Và mình lấy 6 lon thì đang được giảm là 800.000 chị ạ. Và mẹ mua từ ơ mình mua trong vòng 15 ngày con dùng không hợp mình được gửi trả lại cho bên em những cái lon chưa mở bên em thu hồi lại với giá ban đầu mẹ mua nhá</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 text-justify border-r-black">
                  <p>
                    Giai đoạn này của con dg gấp rút cải thiện, chị lấy sớm cho con cho tiết kệm chi phí cũng như con dùng kịp thời để cải thiện chiều cao. chi lấy trước cho con 3 lon hay 6 lon em hỗ trợ lên đơn cho mình
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 text-justify border-r-black border-b-black">
                  <p>
                    Hôm nay, khi mẹ mua đơn hàng sẽ được tặng thêm 1 phác đồ dự đoán chiều cao tới tuổi 20 cho con, ngoài ra được tặng 1 thước dán tường theo dõi chiều cao của con kèm 1 cuốn cẩm nang chuyên sâu chăm sóc chiều cao vượt trội cho con nữa mẹ ạ.
                  </p>
                </td>
              </tr>

              <tr>
                <td className="border border-gray-400 border-y-black border-l-black bg-[#d8e4bc] p-2 align-top font-medium" rowSpan={4}>SAU CHỐT</td>
                <td className="border border-gray-400 p-2 text-justify border-r-black">
                  <p>Dạ vâng. Đấy thì em xin phép kết bạn Zalo với mẹ nhá vì sau cuộc gọi này thì em muốn kết bạn Zalo để có cái phác đồ theo dõi cho con vì mỗi bạn có một cái phác đồ riêng.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 text-justify border-r-black">
                  <p>
                    Phác đồ này sẽ duy trì cho con đến năm 20 tuổi, có nghĩa là mình sẽ dự đoán được cái chiều cao đến năm 20 tuổi của con theo chiều cao cân nặng của bố mẹ và quá trình sinh hoạt của con.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 text-justify border-r-black">
                  <p>
                    Nhưng mà nhận được cho con dùng luôn giúp em nhá, cố gắng là dùng trước 23:00 nhá
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 text-justify border-r-black border-b-black">
                  <p>
                    Vâng thế mẹ ơi em Thu Hằng ấy Zalo của mẹ có có rồi thì mẹ cứ nhận được sữa mẹ nhắn lại cho em để em đặt lịch theo dõi cũng như là đưa phác đồ cho các bác thì các bác hỗ trợ cho con nhá.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex border border-black p-4 w-1/3">
          <ListCustomers />
        </div>
      </div>
    </div>
  )
}

export default page