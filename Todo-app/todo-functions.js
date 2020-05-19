//challenge: create the following functions
//fetch todos from local storage
let getSavedTodos = function (){
    let todosJson = localStorage.getItem('todos')
    if (todosJson != null)
    {
        return JSON.parse(todosJson)
    }
    else
    {
    return []
    }
}

//Save todos to local storage
const saveTodos = function(title){
    todos.push({title: title, isDone: false})
    todosJson = JSON.stringify(todos)
    localStorage.setItem('todos', todosJson)    
    console.log(`${title} has been added to the todo list`)
}

//Render application todos based on filters
let renderTodos = function(todos, textFilter){   
    document.querySelector('#myTodos').textContent = ''
    const filteredItems = todos.filter(function(item){
        let hasText = item.title.toLowerCase().includes(textFilters.searchText) 
        
        //show if it both has the text value and 
        //we want to include doneTodos
        return !textFilter.hideCompleted ? hasText && item.isDone : hasText
         
    })
    generateTodoDOM(filteredItems)
}


//Get the DOM elements for an individual note
let generateTodoDOM = function(filteredList){
    generateSummaryDOM(filteredList.length)
    filteredList.forEach(function (item){
        let itemToAdd = document.createElement('p')
        itemToAdd.textContent = item.title
        document.querySelector('#myTodos').appendChild(itemToAdd)
    })
}

//Get the Dom elements for the list summary
let generateSummaryDOM = function(count)
{
    let summaryEl = document.createElement('h2')
   summaryEl.textContent = `You have ${count} items left to do` 
    document.querySelector('#myTodos').appendChild(summaryEl)
}