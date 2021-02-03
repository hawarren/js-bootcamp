// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
import {todos, loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo } from './todos'
import {textFilters, getFilters, setFilters}


// --
renderTodos(todos, textFilters)
// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage