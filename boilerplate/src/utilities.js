
console.log('utilities.js')
//named export
 const add = (a,b) => a + b
console.log(add(2,3))
 const name  = 'Hanif is my name'

//default export, only 1 possible at a time

const square = (x) => x*x*x

export {add, name, square as default}

console.log('from my code')
