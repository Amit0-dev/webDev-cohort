const numbers = [1, 2, 3, 4, 5];

const spliceArray = numbers.splice(1,4) // include last one

numbers.push(1000)

console.log(spliceArray)
console.log(numbers)