//number-methods.js
let num = 103.941
console.log(num.toFixed(2)) //sets number of digits after decimal point.
console.log(Math.round(num)) //rounds number to the nearest integer
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)
console.log(randomNum)

//create a random number 
//between 1 and 5
//take in a guess, if it matches return true else return false

let checkGuess = function (myGuess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(` your guess ${myGuess} ${myGuess === randomNum? 'is' : 'is not'} equal to your ${randomNum}`)
    if (myGuess === randomNum)
    {
             return true
    }
    else
    {return false}
}
console.log(checkGuess(1))
console.log(checkGuess(2))
console.log(checkGuess(3))
console.log(checkGuess(4))
console.log(checkGuess(5))