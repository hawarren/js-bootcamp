let todos = [{ title: 'Wake up in the morning', isDone: true }
    , { title: ' Exercise for 10 minutes', isDone: false }
    , { title: 'eat a healthy breakfast', isDone: true }
    , { title: 'shower and brush teeth', isDone: false }
    , { title: 'buy food', isDone: false }
    , { title: 'get dressed for success', isDone: true }
]

const summary = document.createElement('h2')
const textFilters ={
searchText: ''
} 
const itemsLeftToDo = todos.filter(function (item) {
    return !item.isDone //returns false when isDone is true (ie item is done so we don't want it in our set)
})

//this functions renders the todo items not done, and applies filter
//from the input field on the page.
const renderTodos = function (itemsLeftToDo, textFilter){
    //clear page of todos before rerendering
    document.querySelector('#myTodos').textContent = ''
const filteredItems = itemsLeftToDo.filter(function (item){
    return item.title.toLowerCase().includes(textFilters.searchText.toLowerCase())
})
summary.textContent = `You have ${itemsLeftToDo.length} things to do`
document.querySelector('#myTodos').appendChild(summary)

    filteredItems.forEach(function (item) {
        let itemToAdd = document.createElement('p')
        itemToAdd.textContent = item.title
        document.querySelector('#myTodos').appendChild(itemToAdd)
    })
}
renderTodos(itemsLeftToDo, textFilters)
document.querySelector('#create-todo').addEventListener('click', item => {
    console.log('Item added to Todo List')
})
document.querySelector('#todo-text').addEventListener('input', item => function (e) {
    console.log(e.target.value)
})
document.querySelector('#searchText').addEventListener('input', function (e) {
    textFilters.searchText = e.target.value
    renderTodos(itemsLeftToDo, textFilters)
})
