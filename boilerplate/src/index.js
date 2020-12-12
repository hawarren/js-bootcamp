
import { add, name } from './utilities'
import { scream } from './scream.js'
console.log('index.js')
console.log(add(23, 1))
console.log(name)

//1. Create new file called scream.js
//2.Export a "scream" function that takes a string
// a. Convert that string to upper case
// b. Add "!" onto the end
//3. Import scream into index.js and use it

console.log(scream('This imported function works'))