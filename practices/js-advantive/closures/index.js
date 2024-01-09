/*
Bài 1: Viết một hàm taoTaiKhoan nhận số dư ban đầu 
và trả về một đối tượng có thể gọi các phương thức napTien và rutTien để thực hiện giao dịch.
*/

function createAccount(initialBalance) {
  // TODO: Implement code here
  let currentAmount = initialBalance
  return {
    topUp: function(amount) {
      // validate here
      currentAmount += amount;
      console.log("Nạp tiền thành công. Số dư hiện tại: " + currentAmount);
    },
    withDraw: function(amount) {
      // validate here
      currentAmount -= amount;
      console.log("Rút tiền thành công. Số dư hiện tại: " + currentAmount);
    }
  }
}

const account = createAccount(1000);
account.topUp(500); // Nạp tiền thành công. Số dư hiện tại: 1500
account.withDraw(200); // Rút tiền thành công. Số dư hiện tại: 1300