import uuidv4 from 'uuid/v4'


// Setup the empty todos array
const todos = []
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
const createTodo = (todoText) => {
    if (todoText.length > 0)
        todos.push({ uuid: uuidv4(), title: todoText, isDone: false }); //add a uuid to our title 
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    let indexToRemove = todos.findIndex((todo) => {
        return item.uuid == todo.uuid
    })
    todos.splice(indexToRemove, 1)
    saveTodos()
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    
    const todo = todos.find((id) =>  todo.uuid === id)
    todo.isDone = todo !== undefined ? !todo.isDone : !todo.isDone
    
}
// Make sure to call loadTodos and setup the exports
loadTodos()


export {todos, loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo}