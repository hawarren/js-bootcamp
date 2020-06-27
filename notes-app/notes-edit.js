const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const lastUpdatedElement = document.querySelector('#note-lastUpdated')
const removeElement = document.getElementById('deleteButton')
    //get the id from the hash on the URL
const noteId = location.hash.substring(1)
let notes = function() {
        return getSavedNotes()
    }
    //note function grabs the latest
let note = notes().find(function(item) {
    return noteId == item.id
})

let renderThisNote = function() {
    //kick back to index  if note is not found
    if (note === undefined) {
        location.assign('./index.html')
    }
    let timeAgo = moment(note.updatedAt).fromNow()
        //populates the fields with our note data
    titleElement.value = note.title
    bodyElement.value = note.body
    lastUpdatedElement.textContent = `Last edited ${timeAgo}`
}
renderThisNote()



document.getElementById('note-title').addEventListener('change', function(e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})
document.getElementById('note-body').addEventListener('change', function(e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
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
    //window object has a localstorage event
    //use it for local storage
window.addEventListener('storage', function(e) {
    this.window.console.log('Values changed')
    debugger
    if (e.key === 'storedNotes')
        renderThisNote()
})