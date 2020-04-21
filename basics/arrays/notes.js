//notes.js
const notes = ['Note 1','Note 2', 'Note 3']
console.log(notes.pop()); //remove the last entry in the array
notes.push('My new note') //add to end of array
notes.shift() // remove first entry in array
notes.unshift('My first note') // adds entry to beginning of the array
notes.splice(1,1,'this is the new second item')
console.log(notes.length)
console.log(notes)