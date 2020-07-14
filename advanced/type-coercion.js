//type Coercion - a string, a number, or a boolean
//see guide from lesson 84 of JS bootcamp
console.log('5' + 5) //prints 55
console.log('5' - 5) //prints 0
console.log('5' == 5) //prints true (double =), avoid using loose equality
console.log('5' === 5) //prints false (strict equality, type and value)

const value = true + 12
const type = typeof value //returns string which is type of that variable
console.log(type)
console.log(value)