import {initializeEditPage} from './view'
import {removeNote, updateNote} from './notes'

const removeElement = document.getElementById('deleteButton')
    //get the id from the hash on the URL
const noteId = location.hash.substring(1)

    //note function grabs the latest
// let note = notes.find((item) => noteId === item.id)


document.getElementById('note-title').addEventListener('change', (e) => {    
    updateNote(noteId, {title: e.target.value})
})

document.getElementById('note-body').addEventListener('change', (e) => {    
    updateNote(noteId, {body: e.target.value})
})

removeElement.addEventListener('click', (e) => {
        removeNote(noteId)
        location.assign('./index.html') //route back to home page
    })

    //window object has a localstorage event
//use it for local storage
window.addEventListener('storage', (e) => {
    this.window.console.log('Values changed')
    debugger
    if (e.key === 'storedNotes')
       initializeEditPage(noteId)
        //redirect them if we don't find any note)
    if (!note) {
        location.assign('/index.html')
    }
})