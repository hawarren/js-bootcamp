import { createNote } from './notes.js'
import { setFilters } from './filters.js'
import { renderNotes } from './view.js'

renderNotes()

document.querySelector('#create-note').addEventListener('submit', (event) => {
    addNotes(event.target.elements.inputTitle, event.target.elements.inputBody)
    event.target.textContent = 'Note Added'
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    console.log(e.target.value)
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#name-form').addEventListener('submit', (e) => {
    e.preventDefault() //keeps form from being submitted to server (ie the default behavior of submit)        
    const newID = createNote()
    location.assign(`./edit.html#${newID}`)
})

document.querySelector('#sortStyle').addEventListener('change', (e) => {
    console.log(e.target.value) //print the selected item in dropdown
    setFilters({sortBy: e.target.value})
    
    //render the list, 
    renderNotes()
})

window.addEventListener('storage', (e) => {
    this.window.console.log('Values changed')
    if (e.key === 'storedNotes') {        
        renderNotes()
    }
})
