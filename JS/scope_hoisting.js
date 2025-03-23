// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// const x = 1;

// {
//   console.log(x); // throw ReferenceError
//   const x = 2;
// }

// {
//   var y = 1; // not scoped to blocks
// }
// console.log(y); // 1

// const wishMe = ()=>{
//     console.log('Hello' , fname)
// }

// let fname = "Amit"

// wishMe(fname)

function varTest(){
    let value = 12

    {
        let value = 10
        console.log(value)
    }

    console.log(value)
}

varTest()
