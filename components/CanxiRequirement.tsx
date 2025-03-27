import React from 'react'

const data = [
  { age: "1 tuổi", boyHeight: 75.7, girlHeight: 74, boyWeight: 9.6, girlWeight: 8.9, calcium: "500 mg" },
  { age: "2 tuổi", boyHeight: 87.1, girlHeight: 86.4, boyWeight: 12.2, girlWeight: 11.5, calcium: "500 mg" },
  { age: "3 tuổi", boyHeight: 96.1, girlHeight: 95.1, boyWeight: 14.3, girlWeight: 13.9, calcium: "500mg" },
  { age: "4 tuổi", boyHeight: 103.3, girlHeight: 102.7, boyWeight: 16.3, girlWeight: 16.1, calcium: "600mg" },
  { age: "5 tuổi", boyHeight: 110, girlHeight: 109.4, boyWeight: 18.3, girlWeight: 18.2, calcium: "600mg" },
  { age: "6 tuổi", boyHeight: 116, girlHeight: 115.1, boyWeight: 20.5, girlWeight: 20.2, calcium: "600mg" },
  { age: "7 tuổi", boyHeight: 121.7, girlHeight: 120.8, boyWeight: 21.7, girlWeight: 22.4, calcium: "700mg" },
  { age: "8 tuổi", boyHeight: 127.3, girlHeight: 126.6, boyWeight: 24.1, girlWeight: 25, calcium: "700mg" },
  { age: "9 tuổi", boyHeight: 132.6, girlHeight: 132.5, boyWeight: 26.7, girlWeight: 28.2, calcium: "700mg" },
  { age: "10 tuổi", boyHeight: 137.8, girlHeight: 138.6, boyWeight: 31.2, girlWeight: 31.9, calcium: "1000mg" },
  { age: "11 tuổi", boyHeight: 143.1, girlHeight: 145, boyWeight: 34.6, girlWeight: 36, calcium: "1000mg" },
  { age: "12 tuổi", boyHeight: 149.1, girlHeight: 151.2, boyWeight: 39.9, girlWeight: 40.8, calcium: "1300 mg" },
  { age: "13 tuổi", boyHeight: 156.2, girlHeight: 157.3, boyWeight: 45.8, girlWeight: 45.4, calcium: "1300 mg" },
  { age: "14 tuổi", boyHeight: 163.8, girlHeight: 158.7, boyWeight: 47.6, girlWeight: 47.9, calcium: "1300 mg" },
  { age: "15 tuổi", boyHeight: 170.1, girlHeight: 159.7, boyWeight: 52.1, girlWeight: 52.1, calcium: "1300 mg" },
  { age: "16 tuổi", boyHeight: 173.5, girlHeight: 162.5, boyWeight: 53.5, girlWeight: 55.5, calcium: "1300 mg" },
  { age: "17 tuổi", boyHeight: 175.2, girlHeight: 163, boyWeight: 54.4, girlWeight: 56.5, calcium: "1300 mg" },
  { age: "18 tuổi", boyHeight: 175.7, girlHeight: 163.1, boyWeight: 56.7, girlWeight: 57.5, calcium: "1000 mg" },
  { age: "19-25 tuổi", boyHeight: 176, girlHeight: 164, boyWeight: 70, girlWeight: 58, calcium: "1000 mg" },
]

function CanxiRequirement() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold py-2">NHU CẦU CANXI</h1>
      <div className="overflow-x-auto shadow-md">
        <table className="w-full border-collapse bg-white sticky top-0">
          <thead>
            <tr>
              <th rowSpan={2} className="px-4 py-[6px] text-center border bg-[#f0c568] border-black">
                Độ tuổi
              </th>
              <th colSpan={2} className="px-4 py-[6px] text-center border bg-[#f0c568] border-black">
                Chiều cao (cm)
              </th>
              <th colSpan={2} className="px-4 py-[6px] text-center border bg-[#f0c568] border-black">
                Cân nặng (kg)
              </th>
              <th rowSpan={2} className="px-4 py-[6px] text-center border bg-[#f0c568] border-black w-[20%]">
                Nhu cầu Canxi (mg/ngày)
              </th>
            </tr>
            <tr>
              <th className="px-4 py-[6px] text-center border border-black bg-blue-50">Bé trai</th>
              <th className="px-4 py-[6px] text-center border border-black bg-pink-50">Bé gái</th>
              <th className="px-4 py-[6px] text-center border border-black bg-blue-50">Bé trai</th>
              <th className="px-4 py-[6px] text-center border border-black bg-pink-50">Bé gái</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr className="hover:bg-gray-50" key={item.age}>
                <td className="px-4 py-[6px] text-center border border-black bg-[#f4d798]">{item.age}</td>
                <td className="px-4 py-[6px] text-center border border-black bg-blue-50">{item.boyHeight}</td>
                <td className="px-4 py-[6px] text-center border border-black bg-pink-50">{item.girlHeight}</td>
                <td className="px-4 py-[6px] text-center border border-black bg-blue-50">{item.boyWeight}</td>
                <td className="px-4 py-[6px] text-center border border-black bg-pink-50">{item.girlWeight}</td>
                <td className="px-4 py-[6px] text-center border border-black bg-[#f4d798]">{item.calcium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CanxiRequirement