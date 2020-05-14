//DOM - Document Object Model (a document that is modelled like an object, with methods and properties)
//the object is called "document"
const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to spain'
    },
    {
        title: 'Habits to work on'
        , body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }]
console.log('This is from my html index from a different file')
const p = document.querySelector('p') //gets first element with matching tag
const ps = document.querySelectorAll('p')
console.log(p)

const filters = {
    searchText:''
}
const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = '' //clear the notes first
    //create elements for just the filtered notes
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function(event){
    event.target.textContent = 'This button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e){
    console.log(e.target.value)
    filters.searchText = e.target.value  
    renderNotes(notes, filters)
})
document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()//keeps form from being submitted to server (ie the default behavior of submit)
    console.log(e.target.elements.inputTitle.value) //
    e.target.elements.firstName.value = ''
})
document.querySelector('#checkMe').addEventListener('change', function(e){
console.log(e.target.checked);
})