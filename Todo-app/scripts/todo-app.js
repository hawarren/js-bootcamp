'use strict'
let todos = getSavedTodos()


const textFilters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, textFilters)
document.querySelector('#searchText').addEventListener('input', (event) => {
    textFilters.searchText = event.target.value
    renderTodos(todos, textFilters)
})


//1. get trimmed version of the input
//2. only add new todo if trimmed version has content
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = e.target.elements.todoText.value.trim()
    if (title.length > 0) {
        todos.push({ uuid: uuidv4(), title, isDone: false }); //add a uuid to our title
        saveTodos();
        console.log(`${title} has been added to the todo list`);
        e.target.elements.todoText.value = '';
        textFilters.searchText = '';
        renderTodos(todos, textFilters)
    }
    else{
        console.log(` the input ${e.target.elements.todoText.value} has no content`)
        return
    }
})
document.querySelector('#completedToggle').addEventListener('change', (e) => {
    textFilters.hideCompleted = e.target.checked // toggle value according to checkbox
    renderTodos(todos, textFilters)
})