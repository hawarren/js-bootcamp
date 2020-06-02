const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.getElementById('deleteButton')
    //get the id from the hash on the URL
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(item) {
    return noteId == item.id
})

//kick back to index of note is not found
if (note === undefined) {
    location.assign('./index.html')
}
//populates the fields with our note data
titleElement.value = note.title
bodyElement.value = note.body

document.getElementById('note-title').addEventListener('change', function(e) {
    note.title = e.target.value
    saveNotes(notes)
})
document.getElementById('note-body').addEventListener('change', function(e) {
    note.body = e.target.value
    saveNotes(notes)
})
removeElement.addEventListener('click', function(e) {
    //find the index of the note so we we delete it
    noteIndex = notes.findIndex(function(item) {
        return note === item
    })
    notes.splice(noteIndex)
    saveNotes(notes) //save our newly updated set of notes
    location.assign('./index.html') //route back to home page
})

//add a button to remove the note

//1. Setup input event for title
//2. Update note objet and save notes list
//3.Do the same for body
//4. setup a remove button that removes the note and sends back to homepage