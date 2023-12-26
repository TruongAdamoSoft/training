/*
Bài 1: Viết hàm tính tổng các phần tử trong mảng (param: array)
ex: [1,2,3,4,5] => output: 15
*/
// TODO: Implement code here

function calcSum(arr) {
    let sum = 0;
    arr.forEach(x => {
        sum += x;
    });

    return sum;
}
console.log(calcSum([1,2,3,4,5]))

/*
Bài 2: Cho một mảng object 
object = [{name: "John", age: 26}, {name: "Pete", age: 30}, {name: Mary, age: 28}]

viết hàm trả về một mảng tên và tuổi trung bình (param: object)
output: {names: ["John", "Pete", "Mary"], ageAvg: 42}
*/
// TODO: Implement code here

function print(objects) {
    let names = [];
    let totalAge = 0;
    for (const obj of objects) {
        names.push(obj.name);
        totalAge += obj.age;
    }

    return {name: names, ageAvg: totalAge/objects.length};
}
console.log(print([{name: "John", age: 26}, {name: "Pete", age: 30}, {name: "Mary", age: 28}]))

/*
Bài 3: Viết hàm tính tổng số chẵn số lẻ từ một số n (param: n)
ex: n = 5 => output: {even: 6, odd: 9}
*/
// TODO: Implement code here

function printOddEven(n) {
    let even = 0;
    let odd = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) even += i;
        else odd += i;
    }
    return {even: even, odd: odd};
}
console.log(printOddEven(5));

/*
Bài 4: Viết hàm sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần (param là một mảng và type = 'DESC' hoặc 'ASC)
ex: arr = [1,4,2,5,3], type = "DESC" => output: [1,2,3,4,5]
*/
// TODO: Implement code here

function sorting(arr, type) {
    if (type === 'DESC') {
        return arr.sort((a, b) => b - a);
    }
    return arr.sort();
}
console.log(sorting([1,4,2,5,3], 'ASC'));

//  Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key.
//  It should be named 'd' instead. Merge both objects and correct the wrong property name. 
//  Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

function myFunction(x, y) {
    const {b, ...rest} = y;
    rest.d = b;
    return {...x, ...rest}
}

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. 
// Sort the merge result in ascending order. Return the resulting array
// Test cases:
// myFunction([1, 2, 3], [3, 4, 5]) => [ 1, 2, 3, 4, 5 ]
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) => [ -11, -10, 5, 22, 41,  42, 333]

function myFunction(x, y) {
    return Array.from(new Set(x.concat(y))).sort((a,b) => a - b); 
}

console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))