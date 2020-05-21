//challenge: create the following functions
//fetch todos from local storage
let getSavedTodos = function () {
    let todosJson = localStorage.getItem('todos')
    if (todosJson != null) {
        return JSON.parse(todosJson)
    }
    else {
        return []
    }
}

//Save todos to local storage
const saveTodos = function (title) {
    todos.push({ title: 'default title', isDone: true })
    todos.push({ title: title, isDone: false })
    todosJson = JSON.stringify(todos)
    localStorage.setItem('todos', todosJson)
    console.log(`${title} has been added to the todo list`)
}

//Render application todos based on filters
let renderTodos = function (todos, textFilter) {
    document.querySelector('#myTodos').textContent = ''
    let filteredItems = todos.filter(function (item) {
        let hasText = item.title.toLowerCase().includes(textFilters.searchText)
        //include if it has the text value we filtered on     
        return hasText
    })
    if (textFilters.hideCompleted) //filter out completed items in place (filter and assign back to same variable)
    {
        filteredItems = filteredItems.filter(function (item) {
            return !item.isDone
        })
    }
    generateTodoDOM(filteredItems)
}


//Get the DOM elements for an individual note
let generateTodoDOM = function (filteredList) {
    if (filteredList == undefined) {
        console.log("generateTodoDOM: No filteredlist to print")
    }
    else {

        generateSummaryDOM(filteredList.length)
        filteredList.forEach(function (item) {
            let itemToAdd = document.createElement('p')
            itemToAdd.textContent = item.title
            document.querySelector('#myTodos').appendChild(itemToAdd)
            debugger
        })
    }
}

//Get the Dom elements for the list summary
let generateSummaryDOM = function (count) {
    let summaryEl = document.createElement('h2')
    summaryEl.textContent = `You have ${count} items left to do`
    document.querySelector('#myTodos').appendChild(summaryEl)
}