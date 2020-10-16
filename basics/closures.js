//A closure is a combination of a function with the lexical scope where it was defined

const myFunction = () => {
    const message = 'this is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()

const createCounter = () => {
    let count = 0 //private variable not a property
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//currying, breaking a function with many argument down into functions with fewer arguments
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(30))
const add100 = createAdder(100)
console.log(add100(-90))


//Tipper
//1.Create createTipper which takes in the base tip (.15 for 15% tip)
//2.Set it up to return a function that takes in the bill amount
//3.Call createTipper to generate a few functions for different percentages
//Use the generated functions to calculate tips and print them.

const createTipper = (tip) => {
    return (bill) => {
        return bill * tip
    }
}

const myShare = createTipper(.15)
console.log(` 15 percent of 100 is a tip of ${myShare(100)}`)
console.log(`15 percent of 300 is ${myShare(300)}`)
const myBigShare = createTipper(.30)

console.log(` 30 percent of $400 is ${myBigShare(400)}`)