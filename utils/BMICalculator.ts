export function BMICalculator(heightByAge: (number | undefined)[], weightTo20: (number | undefined)[]) {
  const bmiByAge = heightByAge.map((height, index) => {
    const weight = weightTo20[index];
    // Kiểm tra nếu chiều cao hoặc cân nặng không hợp lệ
    if (!weight || height === 0) return null;

    const heightInMeters = Number(height) / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1); // Làm tròn đến 1 chữ số thập phân
  });

  return bmiByAge;
}