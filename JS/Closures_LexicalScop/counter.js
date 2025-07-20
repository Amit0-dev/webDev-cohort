function createCounter(){
    let counter = {counter: 0}

    // closure function (function binded by its lexical scope)
    return function (){
        counter.counter++
        return counter.counter
    }
}

const f1 = createCounter()
const g1 = createCounter()

console.log(f1 == g1) // false -> both have different memory refrences , both maintain its own counter

console.log(f1())
console.log(f1())
console.log(f1())
console.log(f1())
console.log(g1())
console.log(g1())
console.log(g1())
