const square = (num) => num * num


const squareLong = (num) => {
    return num * num
}
console.log(square(5))

const people = [{
        name: 'Andrew',
        age: 27
    },
    {
        name: 'hanif',
        age: 39
    },
    {
        name: 'Greg',
        age: 22
    }
]

const under30 = people.filter(person => person.age < 30)
const only22 = people.filter(person => person.age === 22)

console.log(under30)
console.log(only22[0].name)
    //1. Find the person with age 22
    //2. Print that person's name