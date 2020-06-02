//DOM - Document Object Model (a document that is modelled like an object, with methods and properties)
//the object is called "document"
const notes = getSavedNotes();

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
        title: '',
        body: ''
    });
    //save the note and redirect to edit page for that note
    saveNotes(notes);
    location.assign(`./edit.html#${newID}`)

})

document.querySelector('#sortStyle').addEventListener('change', function(e) {
    console.log(e.target.value) //print the selected item in dropdown
})