//DOM - Document Object Model (a document that is modelled like an object, with methods and properties)
//the object is called "document"
notes = getSavedNotes();

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('submit', function(event) {
    addNotes(event.target.elements.inputTitle, event.target.elements.inputBody)
    event.target.elements
    event.target.textContent = 'Note Added'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
document.querySelector('#name-form').addEventListener('submit', function(e) {
    e.preventDefault() //keeps form from being submitted to server (ie the default behavior of submit)
    console.log(e.target.elements.inputTitle.value) //
    console.log(e.target.elements.inputBody.value) //
        //addNotes("Unnamed Note", "")
    let newID = uuidv4()
    notes.push({
        id: newID, //assign a uuid so we can identify that note later
        title: e.target.elements.inputTitle.value,
        body: e.target.elements.inputBody.value
    });
    //save the note and redirect to edit page for that note
    saveNotes(notes);
    location.assign(`./edit.html#${newID}`)
})

document.querySelector('#sortStyle').addEventListener('change', function(e) {
    console.log(e.target.value) //print the selected item in dropdown
})
window.addEventListener('storage', function(e) {
    this.window.console.log('Values changed')
    debugger
    if (e.key === 'storedNotes')
        renderNotes(getSavedNotes(), filters)
})
const now = new Date()
const timestamp = now.getTime()
console.log(`The time and date is ${now}`)
console.log(`Year is ${now.getFullYear()}`)
console.log(`Month is 0 indexed, it is: ${now.getMonth()}`)
console.log(`Day is ${now.getDay()}`)
console.log(`Hour is ${now.getHours()}`)
console.log(`Minutes is ${now.getMinutes()}`)
console.log(`Seconds is ${now.getSeconds()}`)
    // console.log(month)
console.log(`timestamp ${timestamp} converted to date ${new Date(timestamp)}`)

//create two dates in the past (use string for date)
//2. Get timestamps for both
//3.Figure out which is first and print it's time (use toString)
let myBday = new Date('July 6 1981').getTime()
let broBday = new Date('July 31, 1988').getTime()

if (myBday < broBday)
    console.log(new Date(myBday).get)
else
    console.log(new Date(broBday))