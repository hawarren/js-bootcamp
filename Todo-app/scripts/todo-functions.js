'use strict'
//fetch todos from local storage
let getSavedTodos = () => {
    try {
        let todosJson = localStorage.getItem("todos");
        return todosJson != null ? JSON.parse(todosJson) : [];
    } catch (e) {
        return []
    }
}


//Save todos to local storage
const saveTodos = () => {
    let todosJson = JSON.stringify(todos);
    localStorage.setItem("todos", todosJson);
};
const toggleTodo = (id) => {
    //finds reference to my todo object within the array    
    const todo = todos.find((todo) => todo.uuid === id)
        //update the todo item via the reference we just grabbed
    todo.isDone = todo !== undefined ? !todo.isDone : !todo.isDone
}

//Render application todos based on filters
let renderTodos = (todos, textFilter) => {
    document.querySelector("#myTodos").textContent = "";
    let filteredItems = todos.filter((item) => item.title.toLowerCase().includes(textFilters.searchText));

    if (textFilters.hideCompleted) {
        //filter out completed items in place (filter and assign back to same variable)
        filteredItems = filteredItems.filter((item) => !item.isDone);

    }
    generateTodoDOM(filteredItems);
};

//1. Set up a root div
//2. Setup and append a checkbox (set type attribute)
//3. Setup and append a span (set text)
//4. Setup and append a button (set text)

//Get the DOM elements for an individual note
let generateTodoDOM = (filteredList) => {
    if (!filteredList) {
        console.log("generateTodoDOM: No filteredlist to print");
    } else {
        generateSummaryDOM(filteredList.length);
        filteredList.forEach((item) => {
            //Setup the pieces to create a single line checkbox with the text title
            const todoEl = document.createElement("label");
            const containerEl = document.createElement('div')
            const thisCheckBox = document.createElement("input");
            const todoTextEl = document.createElement("span");
            const removeButtonEl = document.createElement("button");
                        
            todoTextEl.textContent = item.title;
            removeButtonEl.textContent = "remove";
            removeButtonEl.classList.add('button', 'button--text')
            
            thisCheckBox.setAttribute('type', 'checkbox'); //create a checkbox and set it's type            
            thisCheckBox.checked = item.isDone
            thisCheckBox.id = item.uuid
            thisCheckBox.addEventListener('change', (e) => {
                    toggleTodo(item.uuid)
                    saveTodos()
                })
                //add our stuff to the parent element and then append it to the DOM
            containerEl.appendChild(thisCheckBox);
            containerEl.appendChild(todoTextEl);
            todoEl.appendChild(containerEl)
            todoEl.appendChild(removeButtonEl);

            //setup container
            todoEl.classList.add('list-item')
            containerEl.classList.add('list-item__container')



            document.querySelector("#myTodos").appendChild(todoEl);
        });
    }
};

//Get the Dom elements for the list summary
let generateSummaryDOM = (count) => {
    let summaryEl = document.createElement("h2");
    summaryEl.textContent = `You have ${count} items left to do`;
    document.querySelector("#myTodos").appendChild(summaryEl);
};