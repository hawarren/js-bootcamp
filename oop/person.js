const Person = function(firstName) {
    this.firstName = firstName
    this.lastName = arguments[1]
    this.age = arguments[2]
}

//new generates new empty object
//gives access to this keyword
const me = new Person('Hanif', 'Warren', 39) //uppercase used for constructor functions
const me2 = new Person('Camille', 'Stanley', 45)

console.log(me)
console.log(me2)