export function BMICalculator(heightByAge?: number[], weightTo20?: number[]) {
  if(!heightByAge || !weightTo20) return
  const bmiByAge = heightByAge.map((height, index) => {
    const weight = weightTo20[index];
    // Kiểm tra nếu chiều cao hoặc cân nặng không hợp lệ

    const heightInMeters = Number(height) / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return Number(bmi.toFixed(1)); // Làm tròn đến 1 chữ số thập phân
  });

  return bmiByAge;
}