const Person = function(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

//new generates new empty object
//gives access to this keyword
const me = new Person('Hanif', 'Warren', 39) //uppercase used for constructor functions
const me2 = new Person('Camille', 'Stanley', 45)

console.log(me)
console.log(me2)