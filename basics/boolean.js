//conditional operators
//=== equality operator, checks if 2 values are equal, works on all objects, e.g. strings
//!== not equal operator, checks if 2 are not equal, works on all objects, e.g. strings
// <  less than (only works on numbers)
// > greater than (only works on numbers)
//<= less than/equal to
//>+ greater than/equal to

let temp = 31
let isFreezing = temp < 33
if (isFreezing)
{
    console.log("It is really freezing out here!")
}
else
{
    console.log("It is not freezing");
}

//challenge Booleans 10:34
//Create age set to  your age
//Calculate is child - if they are 7 or under
//calculate is senior = if they are 65 or older
//print is child value
//print is senior value

let myAge = 3
let isChild = myAge <= 7
let isSenior = myAge >= 65

console.log("Am I a child? " + isChild)
console.log("Am I a senior? " + isSenior)

//if 7 or under print message about child pricing
if (isChild)
{
console.log("Children pay no admission");
}

//if 65 or older print message about senior discount
if (isSenior)
{
console.log("Listen senior, you have to pay " +  myAge*2 + " which is $2 for every year you spent on earth")

}