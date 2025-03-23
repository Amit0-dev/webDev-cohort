// type 1
function wish() {
  console.log("Hello Friends");
}

wish();

// type 2
const greet = (fname) => {
  console.log(`Hey , ${fname}`);
};

greet("Amit");

// IIFE

const test = (function () {
  console.log("Hello I am IIFE");
  return "completed";
})();

console.log(test);

// Rest Parameter

function multiply(multiplier, ...number) {
  const arr = [];

  for (let i = 0; i < number.length; i++) {
    arr.push(multiplier * number[i]);
  }

  return arr;
}

const result = multiply(2, 1, 2, 3, 4, 5);
console.log(result);

if (true) {
  function foo() {
    return 1;
  }
}

console.log(foo())