/*
Bài 1: Viết một hàm taoTaiKhoan nhận số dư ban đầu 
và trả về một đối tượng có thể gọi các phương thức napTien và rutTien để thực hiện giao dịch.
*/

function createAccount(initialBalance) {
  // TODO: Implement code here
}

const account = createAccount(1000);
account.topUp(500); // Nạp tiền thành công. Số dư hiện tại: 1500
account.withDraw(200); // Rút tiền thành công. Số dư hiện tại: 1300
