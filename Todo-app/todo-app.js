let todos = getSavedTodos()


const textFilters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, textFilters)
document.querySelector('#searchText').addEventListener('input', function(event) {
    textFilters.searchText = event.target.value
    renderTodos(todos, textFilters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    saveTodos(e.target.elements.todoText.value);
    e.target.elements.todoText.value = '';
    textFilters.searchText = '';
    renderTodos(todos, textFilters)
})
document.querySelector('#completedToggle').addEventListener('change', function(e) {
    textFilters.hideCompleted = e.target.checked // toggle value according to checkbox
    renderTodos(todos, textFilters)
})