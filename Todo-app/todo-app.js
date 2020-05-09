let todos = [{ title: 'Wake up in the morning', isDone: true }
    , { title: ' Exercise for 10 minutes', isDone: false }
    , { title: 'eat a healthy breakfast', isDone: true }
    , { title: 'shower and brush teeth', isDone: false }
    , { title: 'buy food', isDone: false }
    , { title: 'get dressed for success', isDone: true }
]
//challenge 52
//print summary message: "You have x todos left"
//add a paragraph for each todo item
//get a filtered list of items left todo
//challenge 53
//Add button with some text "something like 'add todo'"
//print message to console on click
//challenge 54 use id attribute to change button text
const itemsLeft = todos.filter(function (item) {
    return !item.isDone //returns false when isDone is true (ie item is done so we don't want it in our set)
})
//create a header for our summary
const summary = document.createElement('h2')
const filters = {
    searchText:''
}
const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title

    })
}
renderNotes(notes, filters)
summary.textContent = `You have ${itemsLeft.length} things to do`
document.querySelector('body').appendChild(summary)
//add a paragraph for each filter item
itemsLeft.forEach(function (item) {
    let itemToAdd = document.createElement('p')
    itemToAdd.textContent = item.title
    document.querySelector('body').appendChild(itemToAdd)
})
document.querySelector('#create-todo').addEventListener('click', item => {
    console.log('Item added to Todo List')
})
document.querySelector('#todo-text').addEventListener('input', item => function (e)
{
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filter)
})
