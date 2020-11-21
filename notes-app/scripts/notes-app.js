'use strict'
//DOM - Document Object Model (a document that is modelled like an object, with methods and properties)
//the object is called "document"
let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'lastEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('submit', (event) => {
    debugger
    addNotes(event.target.elements.inputTitle, event.target.elements.inputBody)

    event.target.textContent = 'Note Added'
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
document.querySelector('#name-form').addEventListener('submit', (e) => {
    e.preventDefault() //keeps form from being submitted to server (ie the default behavior of submit)
        //addNotes("Unnamed Note", "")
    let newID = uuidv4()
    let now = moment().valueOf()
    console.log(`logging note with timestamp ${moment(now).format('MMM Do YYYY')}`)
    notes.push({
        id: newID, //assign a uuid so we can identify that note later
        title: '',
        body: '',
        createdAt: now,
        updatedAt: now
    });
    //save the note and redirect to edit page for that note
    saveNotes(notes);
    location.assign(`./edit.html#${newID}`)
})

document.querySelector('#sortStyle').addEventListener('change', (e) => {
    console.log(e.target.value) //print the selected item in dropdown
    filters.sortBy = e.target.value
        //resort the list in place
    notes = sortNotes(notes, filters.sortBy)
        //render the list, sorted this time
    renderNotes(notes, filters)

})
window.addEventListener('storage', (e) => {
    this.window.console.log('Values changed')
    debugger
    if (e.key === 'storedNotes') {
        notes = getSavedNotes();
        renderNotes(notes, filters)
    }
})
const now = moment() //create timestamp
console.log(now.toString())
now.add(1, 'year').subtract(20, 'days')
now.minute(1)

//November 3rd, 2003
console.log(now.format("MMMM Do YYYY"))
console.log(now.fromNow()) //log timestamp to console
console.log(now.valueOf())
const nowTimeStamp = now.valueOf()
console.log(moment(now.valueOf()))

//1.Create a new moment
//2. Set month, day, and year to your birthday
//3. Use format to print it in the following way: Jan 6, 1991
// const hwBday = moment().date(6).month('July').year(1981)
// console.log(`Hanif\ 's bornday is ${hwBday.format('
//                     MMM Do, YYYY ')}`)
// console.log(hwBday.fromNow())