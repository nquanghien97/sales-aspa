import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Filler
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Gender } from './data_config';
import { data_bmi } from './data_bmi';

// Đăng ký các thành phần mà Chart.js sử dụng
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const LineChart = (props: { dataLine: number[], currentAge: string, gender: Gender, BMI: number }) => {
  const { dataLine, currentAge, gender, BMI } = props;
  if (!currentAge || !dataLine) return;
  // Dữ liệu cho biểu đồ
  const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
  const data: ChartData<"line", unknown[], string> = {
    labels: labels,
    datasets: [
      {
        label: 'Điểm BMI của con',
        data: [{ x: currentAge, y: BMI }],
        fill: false,
        borderColor: '#006cd8',
        tension: 0.1,
        backgroundColor: '#006cd8',
        pointRadius: 4,
        pointHoverRadius: 6,
        datalabels: {
          display: false
        },
      },
      {
        label: 'Thiếu cân',
        data: (data_bmi[gender]['5th']),
        fill: '-1',
        borderColor: '#ccc',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(255, 255, 255, .5)',
        datalabels: {
          display: false
        }
      },
      // {
      //   label: 'Sức khỏe dinh dưỡng tốt',
      //   data: (data_bmi[gender]['50th']),
      //   fill: '-1',
      //   borderColor: '#ccc',
      //   tension: 0.1,
      //   pointRadius: 0,
      //   backgroundColor: 'rgba(208, 252, 201, .5)',
      //   datalabels: {
      //     display: false
      //   }
      // },
      {
        label: 'Sức khỏe dinh dưỡng tốt',
        data: (data_bmi[gender]['85th']),
        fill: '-1',
        borderColor: '#ccc',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(208, 252, 201, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Nguy cơ béo phì',
        data: (data_bmi[gender]['95th']),
        fill: '-1',
        borderColor: 'transparent',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(251, 254, 167, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Béo phì',
        data: Array(labels.length).fill((data_bmi[gender]['95th'][data_bmi[gender]['95th'].length - 1]) * 100 / 98), // Điểm cao nhất để lấp đầy phía trên
        fill: '-1',
        borderColor: 'transparent', // Ẩn đường kẻ
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(249, 100, 106, .5)', // Màu đỏ
        datalabels: {
          display: false
        }
      },
    ],
  };

  // Tùy chọn cho biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        align: 'start' as "start" | "end" | "center" | undefined,
        labels: {
          boxWidth: 40,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'BẢNG DỰ ĐOÁN CHIỀU CAO ĐẾN TUỔI TRƯỞNG THÀNH',
        font: {
          size: 20,
        },
        color: '#2563eb',
        padding: {
          bottom: 28,
          top: 16
        }
      },
      tooltip: {
        callbacks: {
          label: (context: unknown) => {
            const age = (context as { raw: { x: number } }).raw.x; // Giá trị trục x (Tuổi)
            const bmi = (context as { raw: { y: number } }).raw.y; // Giá trị trục y (BMI)
            return `Tuổi: ${age}, BMI: ${bmi}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tuổi',
        },
        ticks: {
          rotation: 0, // Đặt góc xoay của nhãn trục x là 0 độ để luôn giữ thẳng
          autoSkip: true, // Tự động bỏ qua một số nhãn nếu không đủ không gian
          maxRotation: 0, // Đảm bảo không bao giờ xoay vượt quá 0 độ
          minRotation: 0, // Đảm bảo không bao giờ xoay dưới 0 độ
        }
      },
      y: {
        title: {
          display: true,
          text: 'BMI',
        },
        max: Math.max(
          ...data_bmi[gender]['95th'], // Lấy giá trị lớn nhất từ dữ liệu BMI
          BMI, // So sánh với BMI hiện tại của con
          (data_bmi[gender]['95th'][data_bmi[gender]['95th'].length - 1]) * 100 / 98
        ),
      },
    },
    maintainAspectRatio: true,
    aspectRatio: 2/3,
  };

  return <Line data={data} options={options} />;
};

export default LineChart;