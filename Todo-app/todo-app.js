let todos = getSavedTodos()

//load up localStorage
// let todosJson = localStorage.getItem('todos')
// if (todosJson != null)
// {
//     todos = JSON.parse(todosJson)
// }

// const summary = document.createElement('h2')
const textFilters ={
searchText: '',
hideCompleted: false
} 
// const itemsLeftToDo = function()
// {
//    return todos.filter(function (item) {
//         return !item.isDone //returns false when isDone is true (ie item is done so we don't want it in our set)
//     })
// } 

//this functions renders the todo items not done, and applies filter
//from the input field on the page.
// const renderTodos = function (todos, textFilter){
//     //clear page of todos before rerendering
//     document.querySelector('#myTodos').textContent = ''
// const filteredItems = todos.filter(function (item){
//     return item.title.toLowerCase().includes(textFilters.searchText.toLowerCase())
    
// })
// summary.textContent = `You have ${filteredItems.length} things to do`
// if (textFilters.hideCompleted)
// summary.textContent+= '(Filtering completed items)'
// document.querySelector('#myTodos').appendChild(summary)

//     filteredItems.forEach(function (item) {
//         let itemToAdd = document.createElement('p')
//         itemToAdd.textContent = item.title
//         document.querySelector('#myTodos').appendChild(itemToAdd)
//     })
// }
renderTodos(todos, textFilters)
document.querySelector('#searchText').addEventListener('input', function (event) {
    textFilters.searchText = event.target.value
    renderTodos(todos,textFilters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e){
    e.preventDefault()
    saveTodos(e.target.elements.todoText.value);
    // todos.push({title: e.target.elements.todoText.value, isDone: false}) //add todo to our object
    // console.log(`${e.target.elements.todoText.value} has been added to my todos`)
    // todosJson = JSON.stringify(todos) //convert to JSON
    // localStorage.setItem('todos', todosJson) //save to localStorage
    
    e.target.elements.todoText.value = '';
    textFilters.searchText = '';    
    renderTodos(todos, textFilters)
})
document.querySelector('#completedToggle').addEventListener('change', function(e){
    textFilters.hideCompleted = e.target.checked // toggle value according to checkbox
    renderTodos(todos, textFilters)
// textFilters.hideCompleted ? renderTodos(itemsLeftToDo(), textFilters) : renderTodos(todos, textFilters)
})