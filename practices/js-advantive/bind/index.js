//Bài 1: Sử dụng bind để in ra nội dung introduce()
const person = {
  name: "John",
  age: 30,
  introduce: function () {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  },
};
const greet = null; // TODO: Implement code here (remove null)
greet(); // Output: Hello, I'm John and I'm 30 years old.
//Bài 2:
function add(a, b, c) {
  return a + b + c;
}

const addWithDefault = null; // TODO: Implement code here (remove null)
console.log(addWithDefault(4)); // Output: 9 (2 + 3 + 4)
