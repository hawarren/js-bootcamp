/*
Write a program that prints the numbers from 1 to 100. 

1.But for multiples of three print “Fizz” instead of the number. And for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

2. Then write a second version of the program that additionally prints Bazz for multiple of 7 and FizzBuzzBazz for multiples of both 3,5 and 7

HINT: The remainder / modulus operator ( % ) returns the remainder after (integer) division
*/

const fizzBuzz = (endNumber = 100, fizz = 'Fizz', buzz = 'Buzz') => {

    if (Number.isInteger(endNumber)) {
        for (let i = 1; i <= endNumber; i++) {
            let word = `${i}`
            if (i % 3 == 0) {
                word = fizz
                    //console.log(`Fizz`)
            }
            if (i % 5 == 0) {
                if (word == i) {
                    word = buzz
                } else {
                    word += buzz
                }
            }
            console.log(`${i} is ${word}`)
        }
    }
}

const fizzBuzzBazz = () => {
    for (var i = 1; i <= 105; i++) {
        let word = `${i}`
        if (i % 3 == 0) {
            word = `Fizz`
                //console.log(`Fizz`)
        }
        if (i % 5 == 0) {
            if (word == i) {
                word = `Buzz`
            } else {
                word += `Buzz`
            }
        }
        if (i % 7 == 0) {
            if (word == 'FizzBuzz') {
                word += 'Bazz'
            } else {
                word = 'Bazz'
            }
        }
        console.log(`${i} is ${word}`)
    }
}

// fizzBuzz(100, 'Fizz', 'Buzz')
fizzBuzzBazz()