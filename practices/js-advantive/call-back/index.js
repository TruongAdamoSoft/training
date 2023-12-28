function transform(numbers, callback) {
    const result = [];
    numbers.forEach(num => result.push(callback(num)));

    return result;
}

function double(num) {
    return num * 2;
}

// [ 2, 4, 6 ]
console.log(transform([1,2,3], double));