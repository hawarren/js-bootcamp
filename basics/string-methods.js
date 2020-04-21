//string-methods.js
let name = 'Hanif Warren'
console.log(`length of the variable is ${name.length}`)
console.log(name.toUpperCase)
//challenge area
//Check if password is valid
//must contain at least 8 characters
//most not contain the word password

let checkPassword = function(inputString){
    // if (inputString.length > 8 && !inputString.toLowerCase().includes('password'))
    // {
    //     console.log(`The password  ${inputString} is valid`)
    // }
    // else
    // {
    //     console.log(`The password ${inputString} is NOT valid`);
    // }
    return inputString.length > 8 && !inputString.toLowerCase().includes('password')
    
}

console.log(checkPassword('asdfp'))
console.log(checkPassword('abc123!@#$%^&'))
console.log(checkPassword('asdfpasdfpoijpassword'))