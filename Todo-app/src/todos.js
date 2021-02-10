import uuidv4 from 'uuid/v4'


// Setup the empty todos array
let todos = []
// loadTodos
// Arguments: none
// Return value: none
let loadTodos = () => {
    try {
        let todosJson = localStorage.getItem("todos");
        todos = todosJson != null ? JSON.parse(todosJson) : [];
    } catch (e) {
        return []
    }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    let todosJson = JSON.stringify(todos);
    localStorage.setItem("todos", todosJson);
};


// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (title) => {
    if (todoText.length > 0)
        todos.push({ uuid: uuidv4(), title, isDone: false }); //add a uuid to our title 
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    let indexToRemove = todos.findIndex((todo) => {
        return todo.uuid === id
    })
    todos.splice(indexToRemove, 1)
    saveTodos()
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (uuid) => {
    
    const todo = todos.find((todo) =>  todo.uuid === uuid)
    todo.isDone = todo !== undefined ? !todo.isDone : !todo.isDone
    saveTodos()
    
}
// Make sure to call loadTodos and setup the exports
loadTodos()


export {todos, loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo}