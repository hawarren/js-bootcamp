//notes.js
const notes = ['Note 1','Note 2', 'Note 3']
console.log(notes.pop()); //remove the last entry in the array
notes.push('My new note') //add to end of array
notes.shift() // remove first entry in array
notes.unshift('My first note') // adds entry to beginning of the array
notes.splice(1,1,'this is the new second item')
console.log(notes.length)
console.log(notes)

console.log(`You have ${notes.length} todos! Here they are in a foreach loop`)
//forEach is a callback function, it takes the item and the index
notes.forEach(function (item, index)
{
    console.log(`Position ${index + 1}. is ${item}`)
});
console.log(`You have ${notes.length} todos! Now Here they are in a for loop`);
for (let count = 0; count <notes.length; count++)
{
    const num = count + 1;
    console.log(`${num}. ${notes[count]}`)
}