export enum Gender {
  BOY = "BOY",
  GIRL = "GIRL"
}

export function weightCalculator(
  currentWeight: number,
  currentYear: number,
  gender: Gender
) {
  // Bảng tăng cân mỗi năm cho bé trai và bé gái
  const weightIncreasePerYear = {
    [Gender.GIRL]: [3.2, 5.7, 2.6, 2.4, 2.2, 2.1, 2.0, 2.2, 2.6, 3.2, 3.7, 4.1, 4.0, 5.0, 5.0, 3.5, 2.0, 1.0, 1.0, 0.4, 1.0],
    [Gender.BOY]:  [3.3, 6.3, 2.6, 2.1, 2.0, 2.0, 2.2, 2.4, 2.5, 2.7, 3.1, 3.8, 3.0, 5.0, 6.5, 6.0, 5.0, 4.0, 2.5, 2.0, 1.4]
  };

  // Kiểm tra giá trị hợp lệ của currentYear (tuổi hiện tại)
  if (currentYear < 0 || currentYear >= 20) {
    return null; // Giá trị không hợp lệ
  }

  // Xác định bảng tăng cân dựa vào giới tính
  const weightIncrease = weightIncreasePerYear[gender];

  // Tạo mảng chứa cân nặng dự đoán từ 0 đến 20 tuổi
  const weightsByAge = new Array(21).fill(null);

  // Gán cân nặng hiện tại vào vị trí tuổi tương ứng
  weightsByAge[currentYear] = currentWeight.toFixed(1);

  let predictedWeight = currentWeight;

  // Tính toán cân nặng dự đoán cho các năm tiếp theo
  for (let year = currentYear + 1; year <= 20; year++) {
    predictedWeight += weightIncrease[year]; // Sửa thành `year` thay vì `year - 1`
    weightsByAge[year] = predictedWeight.toFixed(1);
  }

  return {
    predictedWeightAt20: weightsByAge[20],
    weightsByAge
  };
}
