//primitive value: there are 5 primitive values: string, number, boolean, null, undefined
// const product = {
//     name: 'Influence'
// }

// Object.prototype.someNewMethod = () => 'This is the new function'
// console.log(product.someNewMethod())
// console.log(product)

//prototype chain
//Object: myArray --> Array.protoype --> Object.prototype --> null
const team = ['Luke', 'Madison']
console.log(team)

//function: myFunc --> function.prototype --> Object.prototype -->
const getScore = () => 1

console.log(getScore)
    //String: myString --> String.Prototype - --> Object.prototype --> null
const product = "computer"
console.log(product)

//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
const otherProduct = new String('Phone')
console.log(otherProduct)
    //test commit