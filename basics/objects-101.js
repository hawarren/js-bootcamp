//objects-101
//Challenge area (8:45 of 28.Object Basics)
//Model a person with name/age/location
//then generate a string aka "Andrew is 27 and lives in Philadelphia"
//then bump up the age and print the message again "Andrew is 28 and lives in Philadelphia"
let myPerson = {
    name: 'Hanif',
    age: 38,
    location : 'Egg Harbor Township'
}
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);
myPerson.age += 1;
console.log(`Fast forward a year, and ${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);