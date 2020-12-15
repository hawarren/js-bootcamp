
import otherSquare, { add, name } from './utilities'
import  otherScream  from './scream.js'
console.log('index.js')
console.log(add(23, 1))
console.log(name)

//1. Create new file called scream.js
//2.Export a "scream" function that takes a string
// a. Convert that string to upper case
// b. Add "!" onto the end
//3. Import scream into index.js and use it

console.log(otherScream('This imported function using export default works'))
console.log(otherSquare(10))