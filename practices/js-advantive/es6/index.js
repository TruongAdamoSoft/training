/*
Bài 1: Sử dụng arrow function để tính tổng các phần tử trong mảng
*/
// TODO: Implement code here

/*
Bài 2: 
*/
const greetPerson = (name, age) => {
  // TODO: Sử dụng template literals để tạo câu chào mừng
};

console.log(greetPerson("Alice", 25)); // Kết quả: "Chào mừng Alice, bạn 25 tuổi!"

/*
Bài 3: 
const user = { name: 'John', email: 'john@example.com' };
viết arrow function sử dụng Destructuring Assignment để in ra tên + email
*/
// TODO: Implement code here

/*
Bài 4: 
*/
const concatenateArrays = (arr1, arr2) => {
  // TODO: Sử dụng spread operator để nối hai mảng lại với nhau
};

const sumNumbers = (...numbers) => {
  // TODO: Sử dụng rest parameter để tính tổng các số được truyền vào
};

/*
Bài 5: 
*/
const url = "https://jsonplaceholder.typicode.com/posts/1";
const fetchData = () => {
  // TODO: Sử dụng fetch để gọi một API và trả về dữ liệu dưới dạng Promise
};

fetchData()
  .then((data) => {
    // TODO: Xử lý dữ liệu thành công và in ra dữ liệu
  })
  .catch((error) => {
    // TODO: Xử lý lỗi và in ra lỗi
  });

/*
Bài 6: 
*/
const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";

// Hàm để gọi API và trả về dữ liệu dưới dạng Promise
const fetchData = async (url) => {
  try {
    //call api ở đây
    return data;
  } catch (error) {
    // Xử lý lỗi nếu có
  }
};

// Hàm chính để sử dụng fetchData và xử lý dữ liệu
const mainFunction = async () => {
  try {
    // gọi hàm fetchData ở đây

    console.log(result);
  } catch (error) {
    // Xử lý lỗi nếu có
  }
};

// Gọi hàm chính
mainFunction();

/*
Bài 7: cho 2 url, sử dụng Promise.all để tối ưu hiệu năng
*/
const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";

const fetchData = async (url) => {
  try {
    //call api ở đây
    return data;
  } catch (error) {
    // Xử lý lỗi nếu có
  }
};

// Hàm chính để sử dụng fetchData và xử lý dữ liệu
const mainFunction = async () => {
  try {
    // gọi hàm fetchData ở đây

    console.log(result1);
    console.log(result2);
  } catch (error) {
    // Xử lý lỗi nếu có
  }
};

// Gọi hàm chính
mainFunction();
