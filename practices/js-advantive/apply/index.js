//Sử dụng apply để gọi hàm với mảng tham số

function calculateSum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
// TODO: Implement code here
const sum = calculateSum.apply({}, numbers);

console.log(sum); //Output: 6
