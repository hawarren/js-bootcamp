const products = [{ name: 'Computer Mouse' }]
const product = products[0]

//Truthy - Values that resolve to true in boolean context
//Falsy - Values that resolve to false in boolean context
//falsy values - false, 0, empty string, null, undefined, NaN
//truthy values: arrays and objects (even if empty)
//take advantage throughout all if conditions and ternary operators

if (product) {
    console.log('Product Found')
} else {
    console.log('Product not Found')
}