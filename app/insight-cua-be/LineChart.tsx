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
          color: '#006cd8', // Màu chữ của dữ liệu
          anchor: 'end', // Vị trí của nhãn dữ liệu
          align: 'top', // Căn chỉnh nhãn dữ liệu
          borderColor: '#006cd8',
          font: {
            weight: 'bold',
          },
        },
      },
      {
        label: 'Suy dinh dưỡng nặng',
        data: (data_bmi[gender]['-3SD']),
        fill: true,
        borderColor: '#a082e8',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(160, 130, 232, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Thiếu cân (Suy dinh dưỡng)',
        data: (data_bmi[gender]['-2SD']),
        fill: '-1',
        borderColor: '#ee2820',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(238, 40, 32, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Dưới mức trung bình',
        data: (data_bmi[gender]['-1SD']),
        fill: '-1',
        borderColor: '#b20400',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(178, 4, 0, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Bình thường (Cân đối)',
        data: (data_bmi[gender]['Normal']),
        fill: '-1',
        borderColor: '#ab6702',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(171, 103, 2, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Trên mức trung bình (Thừa cân nhẹ)',
        data: (data_bmi[gender]['+1SD']),
        fill: '-1',
        borderColor: '#ffd655',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(255, 214, 85, .5)',
        datalabels: {
          display: false
        },
      },
      {
        label: 'Thừa cân',
        data: (data_bmi[gender]['+2SD']),
        fill: '-1',
        borderColor: '#beea53',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(190, 234, 83, .5)',
        datalabels: {
          display: false
        }
      },
      {
        label: 'Béo phì',
        data: (data_bmi[gender]['+3SD']),
        fill: '-1',
        borderColor: '#4a9e2b',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: 'rgba(74, 158, 43, .5)',
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
            const age = (context as { raw: { x: number }}).raw.x; // Giá trị trục x (Tuổi)
            const bmi = (context as { raw: { y: number }}).raw.y; // Giá trị trục y (BMI)
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
      },
      y: {
        title: {
          display: true,
          text: 'BMI',
        },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default LineChart;