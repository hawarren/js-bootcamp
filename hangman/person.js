class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.` //can use the "this" in arrow function, not in function declaration
        });
        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    set fullName(fullname) {
        const names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `the full name is ${this.firstName} + ${this.lastName}`
        this.firstName = names[0]
        this.lastName = names[1]
    }

}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }

}
class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const verdict = this.grade > 70 ? `${this.firstName} is passing the class. Grade is ${this.grade}` : `${this.firstName} is failing the class (grade is ${this.grade})`
        return verdict

    }
    updateGrade(bonus) {
        this.grade += bonus

    }

}
//Prototypal Inheritance

//1.Create a new class for a student
//2.Tracker student grade. 0 - 100
//3.Override bio to print a passing or failing message. 70 and above "Andrew is passing the class"
//4.Create "updateGrade" that takes the amount to add or remove from the grade

//Create student
//Print status (failing or passing)
//Change grade to change status
testStudent = new Student('Hanif', 'Asim', 39, 72, ['Growth', 'Studying'])
console.log(testStudent.fullName)
testStudent.fullName = 'Barack Obama'
console.log(testStudent.fullName)
console.log(testStudent.getBio())
testStudent.updateGrade(-71)
console.log(testStudent.getBio())
testStudent.updateGrade(75)
console.log(testStudent.getBio())