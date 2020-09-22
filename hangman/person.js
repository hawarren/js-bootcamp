//Prototypal Inheritance
const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.` //can use the "this" in arrow function, not in function declaration
    });
    return bio
}
Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

// Person.prototype.location = 'Thailand' //rarely used, can configure property values inherited by child
//new generates new empty object
//gives access to this keyword
const me = new Person('Hanif', 'Warren', 39, ['Reading', 'Basketball']) //uppercase used for constructor functions
const me2 = new Person('Camille', 'Stanley', 45, ['Writing', 'Beach'])

console.log(me.getBio())
me.setName('Michelle Obama')
console.log(me.getBio())
console.log(me2.getBio())