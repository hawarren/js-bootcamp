//
let myBook = {
title: '1984',
author: 'George Orwell',
pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
    }
let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary, otherBookSummary)
///Challenge area
//create function, take Fahrenheit, return object with celsius/kelvin/fahrenheit (add the properties before returning)
//dump the output to console

let myTemp = function(fTemp){
return{
fahrenheit: fTemp,
    Kelvin :Math.round((fTemp + 459.67) * 5 / 9),    
    Celsius: Math.round((fTemp-32) * 5 / 9)
        }
}
currentTemp = myTemp(32)
console.log(currentTemp)

currentTemp = myTemp(100)
console.log(currentTemp)

currentTemp = myTemp(212)
console.log(currentTemp)