let todos = [{ title: 'Wake up in the morning', isDone: true }
    , { title: ' Exercise for 10 minutes', isDone: false }
    , { title: 'eat a healthy breakfast', isDone: true }
    , { title: 'shower and brush teeth', isDone: false }
    , { title: 'buy food', isDone: true }
    , { title: 'get dressed for success', isDone: true }
]

const summary = document.createElement('h2')
const textFilters ={
searchText: ''
} 
const itemsLeftToDo = function(todos)
{
   return todos.filter(function (item) {
        return !item.isDone //returns false when isDone is true (ie item is done so we don't want it in our set)
    })
} 

//this functions renders the todo items not done, and applies filter
//from the input field on the page.
const renderTodos = function (itemsLeftToDo, textFilter){
    //clear page of todos before rerendering
    document.querySelector('#myTodos').textContent = ''
const filteredItems = itemsLeftToDo(todos).filter(function (item){
    return item.title.toLowerCase().includes(textFilters.searchText.toLowerCase())
})
summary.textContent = `You have ${filteredItems.length} things to do`
document.querySelector('#myTodos').appendChild(summary)

    filteredItems.forEach(function (item) {
        let itemToAdd = document.createElement('p')
        itemToAdd.textContent = item.title
        document.querySelector('#myTodos').appendChild(itemToAdd)
    })
}
renderTodos(itemsLeftToDo, textFilters)
document.querySelector('#searchText').addEventListener('input', function (event) {
    textFilters.searchText = event.target.value
    renderTodos(itemsLeftToDo, textFilters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e){
    e.preventDefault()
    todos.push({title: e.target.elements.todoText.value, isDone: false})
    console.log(`${e.target.elements.todoText.value} has been added to my todos`)
    e.target.elements.todoText.value = '';
    textFilters.searchText = '';    
    renderTodos(itemsLeftToDo, textFilters)
})
