import { AgeType, TimeType } from "@/app/insight-khach-hang/types"

export const customer_case = ({ age, time }: { age: AgeType, time: TimeType }) => {
  return (
    [
      {
        condition: () => age === AgeType["Độ tuổi dưới 30 tuổi"] && time === TimeType["Nám xuất hiện từ lúc nhỏ"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Đây là tình trạng tăng sắc tố do gen và bị từ khi còn nhỏ dễ là tàn nhang (Các vết sắc tố có nhiều màu từ vàng , nâu , đen , kích thước nhỏ , hình tròn) và những trường hợp này nốt tàn nhanh sẽ tăng đậm dần lên theo tuối tác , dễ hình thành nám hơn so với ngừoi bình thường vì gen uy định hoạt động của sắc tốc melanin bị thái quá .
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Ở nhóm này không thay đổi được gen nên sẽ ko loại bỏ hoàn toàn được sắc tố tàn nhang mà sẽ giúp tàn nhang mờ đi và  giúp kiểm soát nám của khách không bị tăng đậm lên về sau bởi đây là nhóm gen quy định tế bào melanin hoạt động quá mức nên rất dễ bị nám đậm lên về sau so với ngừoi bình thường .
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">

              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin , điều hòa lại phản ứng thái quá của tế bào sắc tố từ đó giúp hạn chế tàn nhang đậm lên về sau
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi dưới 30 tuổi"] && time === TimeType["Nám xuất hiện từ lúc dậy thì"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                - Đây là tình trạng nám có yếu tố di truyền (gen) , trường hợp này làn da của khách hàng như một cái máy cảm biến ánh sáng cực mạnh bởi gen quy định sắc tố melanin dứoi da rất nhạy cảm và phản ứng thái quá với các tác động tấn công tới làn da , ví dụ :  đi nắng, hoặc stress hay thay đổi nội tiết tố là da sẽ phản ứng bằng cách tăng melanin và melanin thì chính là sắc tố tạo nám.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} Nhóm này sẽ rất dễ bị nám dù chỉ là 1 tác động nhỏ và nám sẽ khá đậm nếu không hỗ trợ ngay từ bây giờ.
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Ở Nhóm này, cũng giống tàn nhang , nám sẽ không hết hoàn toàn được mà  sẽ mờ đi giúp , da đều màu hơn vì không thể thay đổi được gen của khách hàng.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Nhưng điều quan trọng là ở những khách hàng này nám sẽ  dần tăng đậm lên rất nhanh , lan rộng  hơn so với ngừoi bình thường bởi sắc tố melanin rất nhạy cảm với mọi yếu tố  nên cần kiểm soát sắc tố melanin tốt.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">

              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin , điều hòa lại phản ứng thái quá của tế bào sắc tố từ đó giúp hạn chế tàn nhang đậm lên về sau.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi dưới 30 tuổi"] && time === TimeType["Nám xuất hiện sau sinh"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                - Đây là tình trạng nám do nội tiết tố suy giảm  dẫn tới không kiểm soát được hoạt động của hắc sắc tố melanin tạo thành các mảng nám rõ trên má, trán, cằm, khiến da sạm, xỉn màu và kém sức sống.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} Nhóm khách hàng này thường đi kèm theo triệu chứng rụng tóc , suy giảm trí nhớ , cân nặng khó giảm , da khô - sạm - nám.
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Nhóm này có khả năng phục hồi rất tốt nếu được chăm sóc và cân bằng nội tiết tố kịp thời . Đặc biệt, vì các mẹ sau sinh thường thiếu ngủ, stress, kiệt sức, nên việc cải thiện làn da cần kết hợp giữa phục hồi nội tiết + tái tạo tế bào da + chăm sóc sức khỏe tinh thần.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {'=>'} Mục tiêu: Bộ sản phẩm sẽ giúp điều hòa lại nội tiết tố sau sinh  từ đó giúp kiểm soát melanin khiến nám không tăng sinh một cách an toàn , cung cấp dinh dưỡng nuôi da (bù đắp vào cấu trúc da bất ổn ) giúp làm sáng đều màu da – tăng sinh collagen tự nhiên giúp gảim lão hóa  – đồng thời hỗ trợ cơ thể khỏe hơn, ngủ ngon hơn, từ đó giúp da phục hồi nhanh và hạn chế tái nám.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin , điều hòa lại phản ứng thái quá của tế bào sắc tố từ đó giúp hạn chế tàn nhang đậm lên về sau.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi 30- 40 tuổi"] && time === TimeType["Nám xuất hiện từ lúc dậy thì"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                - Đây là tình trạng nám do gen quy định sắc tố melanin dứoi da rất nhạy cảm và phản ứng thái quá với các tác động tới làn da nên sau khi sinh xong  nội tiết mất cân bằng và cụ thể là thiếu hụt sau sinh gây mất kiểm soát hoạt động của sắc tố melanin dẫn đến nám tăng sinh  mạnh mẽ hơn và đẩy lên bề mặt da.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} sau sinh thấy nám bỗng rõ hơn, da sạm hẳn, cảm giác như vừa ‘già đi 5 tuổi’...”
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} Đó là vì cơ địa vốn đã có gen dễ nám thì sau sinh chính là thời điểm nám bùng phát mạnh nhất . Sau sinh, estrogen thiếu hụt đột ngột kết hợp với yếu tố di truyền → tế bào melanin bị kích hoạt kép, dẫn tới nám đậm.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} Khó hồi phục nếu chỉ bôi ngoài.
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Đây là nhóm khách hàng rất dễ tự ti, vì sự thay đổi của làn da diễn ra quá nhanh sau sinh – họ cảm thấy mình &quot;xuống sắc&quot; không kiểm soát, dù vẫn cố chăm sóc.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Tuy nhiên, nếu được hỗ trợ kịp thời, vẫn có thể làm mờ nám rõ rệt và giữ cho sắc tố không tiếp tục lan thêm.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin giúp ngừa nám tăng sinh.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi 30- 40 tuổi"] && time === TimeType["Nám xuất hiện sau sinh"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                - <strong>Đây là tình trạng nám do nội tiết tố suy giảm  dẫn tới không kiểm soát được hoạt động của hắc sắc tố melanin</strong> tạo thành các mảng nám rõ trên má, trán, cằm, khiến da sạm, xỉn màu và kém sức sống.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nhóm khách hàng này thường đi kèm theo triệu chứng rụng tóc , suy giảm trí nhớ , cân nặng khó giảm , da khô - sạm - nám .
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Nhóm này có khả năng phục hồi rất tốt nếu được chăm sóc và cân bằng nội tiết tố kịp thời.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Đặc biệt, vì các mẹ sau sinh thường thiếu ngủ, stress, kiệt sức, nên việc cải thiện làn da cần kết hợp giữa phục hồi nội tiết + tái tạo tế bào da + chăm sóc sức khỏe tinh thần.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {'=>'} Mục tiêu: Bộ sản phẩm sẽ giúp điều hòa lại nội tiết tố sau sinh  từ đó giúp kiểm soát melanin khiến nám không tăng sinh một cách an toàn , cung cấp dinh dưỡng nuôi da (bù đắp vào cấu trúc da bất ổn ) giúp làm sáng đều màu da – tăng sinh collagen tự nhiên giúp gảim lão hóa  – đồng thời hỗ trợ cơ thể khỏe hơn, ngủ ngon hơn, từ đó giúp da phục hồi nhanh và hạn chế tái nám.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin giúp ngừa nám tăng sinh.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi 40 - 60 tuổi"] && time === TimeType["Nám xuất hiện từ lúc dậy thì"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Đây là nhóm khách hàng đã có nền nám từ trước do gen quy định sắc tố melanin hoạt động 1 cách thái quá  nên  bước sang giai đoạn tiền mãn kinh khiến tình trạng nám trở nên rõ và nặng hơn.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Kết hợp ở tuổi này , cấu trúc da có tình trạng láo hóa  khiến làn da không còn đủ “lực tự bảo vệ” như trước lại kết hợp Hệ sắc tố melanin vốn đã nhạy cảm và hoạt động thái quá  . Nay gặp yếu tố da yếu cần được bảo vệ , nội tiết tố duy giảm 5-10% /năm khiến cho sắc tố melanin tốt mầu trội lên mạnh mẽ tạo thành vết nám trên bề mặt da.
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Phụ nữ giai đoạn này thường rất dễ bị mất tự tin – không chỉ vì nám mà còn bởi làn da trở nên xỉn màu, khô ráp, kém đàn hồi, kèm theo mất ngủ và cáu gắt.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Đây là lúc cần một giải pháp vừa ổn định nội tiết – vừa nuôi da sâu bằng dinh dưỡng để bù đắp vào cấu trúc da bất ổn , bảo vệ  tế bào da lão hóa chậm đi để kiểm soát nám ở mức độ chủ động nhất.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {'=>'} Mục tiêu: Bộ sản phẩm sẽ giúp làm mờ nền nám sẵn có, ngăn chặn nám lan thêm nhờ điều hòa hoạt động của melain ,cũng cấp dinh dưỡng nuôi da  để kháng nám tăng đậm lại sau này,  tăng sắc tố sáng màu giúp cải thiện độ sáng – độ đều màu của da, đồng thời hỗ trợ giấc ngủ, tinh thần, tăng sinh lực nữ ở tuổi 40+.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin giúp ngừa nám tăng sinh.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi 40 - 60 tuổi"] && time === TimeType["Nám xuất hiện sau sinh"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {'=>'} Đây là tình trạng nám xuất hiện đến từ làn da bị lão hóa và suy yếu , mất đi khả năng tự bảo vệ dẫn đến sắc tố melanin phải trội lên để bảo vệ da , kết hợp với tuổi này cơ thể suy giảm , thiếu hụt nội tiết tố 5-10% /năm làm mất đi yếu tố kiểm soát hoạt động melanin
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} dẫn đến sắc tố melanin tăng sinh ồ ạt làm xuất hiện nám trên bề mặt da.
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Khách hàng giai đoạn này thường rơi vào trạng thái không chỉ mất tự tin về làn da mà còn mất cân bằng cả về sức khỏe và cảm xúc bởi các triệu chứng do nội tiết tố suy giảm gây ra như : bốc hỏa , đổ mồ hôi đêm , rối loạn kinh nguyệt , rụng tóc , khô hạn , giảm ham muốn , khó kiểm soát về cảm xúc.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Tuy nhiên, nếu biết cách bổ sung kịp thời, làn da vẫn có thể tái sinh từ từ bằng việc  điều hòa hoạt động của melanin nhờ cân bằng nội tiết tố và cung cấp đúng dưỡng chất nuôi lại tế bào da.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {'=>'} Mục tiêu: Bộ sản phẩm sẽ giúp cân bằng lại nội tiết tố đồng thời phục hồi cấu trúc nền da bằng cách cung cấp nguyên liệu bù đắp dinh dưỡng vào cấu trúc bất ổn của làn da để da sáng hơn - mờ nám - và cải thiện về cả sức khỏe và tinh thần cho khách hàng
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin giúp ngừa nám tăng sinh.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi trên 60 tuổi"] && time === TimeType["Nám xuất hiện từ lúc dậy thì"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Đây là nhóm khách hàng đã có nền nám từ trước do gen quy định sắc tố melanin hoạt động 1 cách thái quá  nên  bước sang giai đoạn  mãn kinh khiến tình trạng nám trở nên rõ và nặng hơn do cấu trúc da lúc này lão hóa, mất khả năng bảo vệ, melanin sẽ hoạt động mạnh mẽ để bảo vệ da.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Kết hợp ở tuổi này , cấu trúc da có tình trạng láo hóa  khiến làn da không còn đủ “lực tự bảo vệ” như trước lại kết hợp Hệ sắc tố melanin vốn đã nhạy cảm và hoạt động thái quá  . Nay gặp yếu tố da yếu cần được bảo vệ , nội tiết tố duy giảm 5-10% /năm khiến cho sắc tố melanin tốt mầu trội lên mạnh mẽ tạo thành vết nám trên bề mặt da .
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Phụ nữ giai đoạn này thường rất dễ bị mất tự tin – không chỉ vì nám mà còn bởi làn da trở nên xỉn màu, khô ráp, kém đàn hồi, kèm theo mất ngủ và cáu gắt, rụng tóc, bốc hỏa,...
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Đây là lúc cần một giải pháp vừa ổn định nội tiết – vừa nuôi da sâu bằng dinh dưỡng để bù đắp vào cấu trúc da bất ổn , bảo vệ  tế bào da lão hóa chậm đi để kiểm soát nám ở mức độ chủ động nhất.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {'=>'} Mục tiêu: Bộ sản phẩm sẽ giúp làm mờ nền nám sẵn có, ngăn chặn nám lan thêm nhờ điều hòa hoạt động của melain ,cũng cấp dinh dưỡng nuôi da  để kháng nám tăng đậm lại sau này,  tăng sắc tố sáng màu giúp cải thiện độ sáng – độ đều màu của da, đồng thời hỗ trợ giấc ngủ, tinh thần, tăng sinh lực nữ ở tuổi 60+.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin giúp ngừa nám tăng sinh.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      },
      {
        condition: () => age === AgeType["Độ tuổi trên 60 tuổi"] && time === TimeType["Nám xuất hiện sau sinh, tiền mãn kinh"],
        content: {
          customer_status: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Đây là tình trạng nám xuất hiện đến từ làn da bị lão hóa và suy yếu , mất đi khả năng tự bảo vệ dẫn đến sắc tố melanin phải trội lên để bảo vệ da , kết hợp với tuổi này cơ thể suy giảm , thiếu hụt nội tiết tố 5-10% /năm làm mất đi yếu tố kiểm soát hoạt động melanin.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {'=>'} Dẫn đến sắc tố melanin tăng sinh ồ ạt làm xuất hiện nám trên bề mặt da.
              </p>
            </div>
          ),
          conclude: (
            <div className="p-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {'=>'} Khách hàng giai đoạn này thường rơi vào trạng thái không chỉ mất tự tin về làn da mà còn mất cân bằng cả về sức khỏe và cảm xúc bởi các triệu chứng do nội tiết tố suy giảm gây ra như : bốc hỏa, đổ mồ hôi đêm, rối loạn kinh nguyệt, rụng tóc, khô hạn, giảm ham muốn, khó kiểm soát về cảm xúc.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                Tuy nhiên, nếu biết cách bổ sung kịp thời, làn da vẫn có thể tái sinh từ từ bằng việc  điều hòa hoạt động của melanin nhờ cân bằng nội tiết tố và cung cấp đúng dưỡng chất nuôi lại tế bào da.
                </p>
              </div>
            </div>
          ),
          solution: (
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {'=>'} Mục tiêu: Bộ sản phẩm sẽ giúp cân bằng lại nội tiết tố đồng thời phục hồi cấu trúc nền da bằng cách cung cấp nguyên liệu bù đắp dinh dưỡng vào cấu trúc bất ổn của làn da để da sáng hơn - mờ nám - và cải thiện về cả sức khỏe và tinh thần cho khách hàng.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">ASPALADY</span> là sản phẩm giúp kiểm soát tế bào sắc tố melanin giúp ngừa nám tăng sinh.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Phá hủy và Loại bỏ sắc tố nám đã hình thành trên bề mặt ra bằng kem bôi nám
                    <span className="font-medium"> Dimolaure</span>
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bảo vệ da da bị suy yếu trước các tác động bên ngoài:
                    <span className="font-medium"> kem chống nắng</span>
                  </p>
                </li>
              </ul>
            </div>
          )
        }
      }
    ]
  )
}