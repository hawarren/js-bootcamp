//Challenge
// Create a temperature conversion for fahrenheit to Celsius
//c = f -32 *(5/9)
//32f should be 0c
//kelvin: 232

//calculate celsius and store in celsius variable
//print the celsius variable
let f = 32
let f1 = 32 //freezing
let f2 = -459.67  //absolute 0 temp
let f3 = 98.6 //average body temperature
let f4 = 212 //boiling point of water


let c1 = (f1 - 32) * 5 / 9 //hardcoded value, before I implemented conversion
let c2 = (f2 -32) * 5 / 9
let c3 = (f3 -32 ) * 5 / 9
let c4 = (f4 - 32) * 5 / 9
//noticed I was assigned the c variables using the same formula, so I just created a function to do it,
//now the celsius variables are not  necessary
function convertToCelsisus(temp){
    
   
return (temp-32) * 5 / 9
}



console.log(f1 +" degrees fahrenheit is equal to " + c1 + " degrees celsius")
console.log(f1 +" degrees fahrenheit is equal to " + convertToCelsisus(f1) + " degrees celsius")
console.log(f2 +" degrees fahrenheit is equal to " + convertToCelsisus(f2) + " degrees celsius")
console.log(f3 +" degrees fahrenheit is equal to " + convertToCelsisus(f3) + " degrees celsius")
console.log(f4 +" degrees fahrenheit is equal to " + convertToCelsisus(f4) + " degrees celsius")
console.log("this line uses a function to convert " + f + 
" to celsius: " + convertToCelsisus(f) )


//calculate the kelvin value 
//print the kelvin value

function convertToKelvin(temp){
    return (temp + 459.67) * 5 / 9
}

console.log(f1 + " fahrenheit is equal to " + convertToKelvin(f1) + " degrees kelvin, and the correct answer is 273.15")
console.log(f2 + " fahrenheait is equal to " + convertToKelvin(f2) + " degrees kelvin, and the correct answer is zero")
console.log(f3 + " fahrenheit is equal to " + convertToKelvin(f3) + " degrees kelvin, and the correct answer is 310.15")