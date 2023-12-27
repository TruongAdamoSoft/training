//Bài 1: Sử dụng call để gọi hàm với ngữ cảnh this khác nhau

function greet(message) {
  console.log(`${message}, I'm ${this.name}.`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// TODO: Implement code here
//Output: Hi, I'm Alice
//Output: Hello, I'm Bob
