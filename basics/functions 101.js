//functions 101


//challenge area
//convertFahrenheitToCelsius

let Celsius = function(temp)
{
    return (temp -32) /9*5  ;
}
let fancyCelsius = f => ((f -32)/9*5)

let temp1 = Celsius(32);
let temp2 = Celsius(212);

let temp3 = Celsius(122)

console.log(temp1)
console.log(temp2)
console.log(temp3)

temp1 = fancyCelsius(32);
temp2 = fancyCelsius(212);
temp3 = fancyCelsius(122)

console.log(temp1)
console.log(temp2)
console.log(temp3)
