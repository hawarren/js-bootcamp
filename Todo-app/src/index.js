// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
import {todos, loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import {textFilters, getFilters, setFilters} from './filters'
import { todoDomEL, renderTodos, generateTodoDOM, generateSummaryDOM} from './views'
import uuidv4 from 'uuid/v4'
import { renderNotes } from '../../notes-app/src/view'


// --

// Add necessary imports

// Render initial todos
renderTodos()
// Set up search text handler
document.querySelector('#searchText').addEventListener('input', (event) => {
    textFilters.searchText = event.target.value
    renderTodos()
})
// Set up checkbox handler
document.querySelector('#completedToggle').addEventListener('change', (e) => {
    textFilters.hideCompleted = e.target.checked
    renderTodos()
})

// Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = e.target.elements.todoText.value.trim()
    if (title.length > 0) {
        todos.push({uuid: uuidv4(), title, isDone: false })
        saveTodos()
        e.target.elements.todoText.value = ''
        textFilters.searchtext = ''
        renderTodos()
    }
})
// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    window.console.log('Values have changed')
    if (e.key === 'todos'){
        loadTodos()
        renderTodos()

    }
})