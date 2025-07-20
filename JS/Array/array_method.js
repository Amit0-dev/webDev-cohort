const numbers = [1, 2, 3, 4, 5];

// When array is not Empty
// console.log(numbers.push(10)); // 6
// console.log(numbers.pop()); // 10

// console.log(numbers.unshift(100)); // 6
// console.log(numbers.shift()); // 100

// Array.from method

// console.log(Array.from("AMIT", (x) => x.concat("0")));

// concat method

const newArray = [60, 17, 48, 9, 0];

const concatArray = numbers.concat(newArray)

// console.log(concatArray)

// By default, .sort() converts elements to strings and sorts them lexicographically, which can give incorrect results for numbers:
const refrenceOfOriginalArray = newArray.sort((x , y)=> x - y)

// console.log(refrenceOfOriginalArray)


// Join method

console.log(numbers.join())