/*
Bài 1: Viết một hàm filterRange(arr, a, b) lấy một mảng arr.
tìm kiếm các phần tử giữa a và b trong đó và trả về một mảng trong số đó. 
Không sửa đổi mảng. Trả về mảng mới. 
*/
// TODO: Implement code here

function filterRange(arr, a, b) {
  return arr.filter(x => x > a && x < b);
}

/*
Bài 2: Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b.
Nghiệm là: a ≤ arr [i] ≤ b.
ví dụ: arr = [ 1,3,4,5]
filterRangeInPlace(arr, 1,3)
console.log(arr) => [1,3]
*/
// TODO: Implement code here
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < a || element > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

/*
Bài 3: Bạn có một mảng các đối tượng người dùng, mỗi đối tượng có name, surname và id. 

Viết code để tạo một mảng khác từ nó, gồm các đối tượng có id và fullName, trong đó fullName được tạo từ name và surname. 

Sử dụng các method của array
*/
// TODO: Implement code here

function bai3(arr) {
  return arr.map(obj => ({
    id: obj.id,
    fullName: obj.name + obj.surname
  }));
}


/*
Bài 4: Viết hàm getAverageAge(users) lấy một mảng đối tượng có thuộc tính tuổi và trả về tuổi trung bình.
có sử dụng method reduce của array
*/
// TODO: Implement code here
function getAverageAge(users) {
  return users.reduce((total, user) => {
    total += user.age
  }, 0) / users.length;
}

/*
Bài 5: Cho một mảng n số nguyên. Đếm xem trong mảng mỗi số xuất hiện bao nhiêu lần trong mảng. 
Các số trong mảng có độ lớn từ 0 đến 1000. n <= 100. Yêu cầu: 

Đầu vào: [1, 2, 8, 4, 1, 3, 1, 8, 3] 

Đầu ra:  

[ 

{ 1 : 3 }, 

{ 2 : 1 }, 

{ 3 : 2 }, 

{ 4 : 1 }, 

{ 8 : 2 } 

] 
*/

function print(nums) {
  const map = new Map();
  for (const x of nums) {
    if (map.has(x)) {
      value = map.get(x);
      map.set(x, value + 1);
    } else {
      map.set(x, 1);
    }
  }
  return map;
}

// convert map to output here



/*
bài 6: Cho mảng sau 

[ 

{ id : 15 }, { id : - 1 }, { id : 0 }, { id : 3 },  

  { id : '12' }, { id : null }, { id : NaN }, { id : 'undefined' } 

] 

Lọc ra các giá trị id là số dương trong mỗi object. 
*/
// TODO: Implement code here

function filterObj(arr) {
  return arr.filter(obj => typeof(obj.id) == 'number' && obj.id > 0);
}


/*
Bài 7: Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau: 

Phí thuê bao bắt buộc là 25 nghìn. 

600 đồng cho mỗi phút gọi của 50 phút đầu tiên. 

400 đồng cho mỗi phút gọi của 150 phút tiếp theo. 

200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên. 
*/
// TODO: Implement code here

function calculateBill(baseFee, first50MinutesRate, next150MinutesRate, after200MinutesRate, minutesUsed) {
  let phoneBill = baseFee;

  if (minutesUsed > 0) {
      phoneBill += first50MinutesRate * Math.min(minutesUsed, 50);
      minutesUsed -= 50;
  }

  if (minutesUsed > 0) {
      phoneBill += next150MinutesRate * Math.min(minutesUsed, 150);
      minutesUsed -= 150;
  }

  if (minutesUsed > 0) {
      phoneBill += after200MinutesRate * minutesUsed;
  }

  return phoneBill;
}

let baseFee = 25000;
let first50MinutesRate = 600;
let next150MinutesRate = 400;
let after200MinutesRate = 200;
let minutesUsed = 250;

let phoneBill = calculateBill(baseFee, first50MinutesRate, next150MinutesRate, after200MinutesRate, minutesUsed);
console.log("Total: " + phoneBill);


/*
Bài 8 (*) : Đầu vào là một mảng số, ví dụ: arr = [1, -2, 3, 4, -9, 6]. 

Nhiệm vụ là: tìm mảng con liền kề của arr với tổng các item lớn nhất. 

Viết hàm getMaxSubSum(arr) sẽ trả về tổng và mảng con đó đó. 
*/
// TODO: Implement code here

function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  let startIndex = 0;
  let endIndex = -1;

  for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];

      if (currentSum < 0) {
          currentSum = 0;
          startIndex = i + 1;
      }

      if (currentSum > maxSum) {
          maxSum = currentSum;
          endIndex = i;
      }
  }

  // If all elements are negative, choose the maximum element
  if (maxSum === 0 && endIndex === -1) {
      maxSum = Math.max(...arr);
      startIndex = arr.indexOf(maxSum);
      endIndex = arr.indexOf(maxSum);
  }

  return {
      sum: maxSum,
      subArray: arr.slice(startIndex, endIndex + 1)
  };
}

// Test with the provided array
let arr = [1, -2, 3, 4, -9, 6];
let result = getMaxSubSum(arr);
console.log("Maximum Subarray Sum: " + result.sum);
console.log("Maximum Subarray: " + result.subArray);