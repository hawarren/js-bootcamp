'use strict'
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const lastUpdatedElement = document.querySelector('#note-lastUpdated')
const removeElement = document.getElementById('deleteButton')
    //get the id from the hash on the URL
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
    //note function grabs the latest
let note = notes.find((item) => noteId === item.id)

let renderThisNote = () => {
    //kick back to index  if note is not found
    if (!note) {
        location.assign('./index.html')
    }
    let timeAgo = moment(note.updatedAt).fromNow()
        //populates the fields with our note data
    titleElement.value = note.title
    bodyElement.value = note.body
    lastUpdatedElement.textContent = `Last edited ${timeAgo}`
    lastUpdatedElement.classList.add('list-item__subtitle')
}
renderThisNote()



document.getElementById('note-title').addEventListener('change', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})
document.getElementById('note-body').addEventListener('change', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})
removeElement.addEventListener('click', (e) => {
        //find the index of the note so we we delete it
        noteIndex = notes.findIndex((item) => note === item)
        notes.splice(noteIndex, 1)
        saveNotes(notes) //save our newly updated set of notes
        location.assign('./index.html') //route back to home page
    })
    //window object has a localstorage event
    //use it for local storage
window.addEventListener('storage', (e) => {
    this.window.console.log('Values changed')
    debugger
    if (e.key === 'storedNotes')
        renderThisNote()
        //redirect them if we don't find any note)
    if (!note) {
        location.assign('/index.html')
    }
})