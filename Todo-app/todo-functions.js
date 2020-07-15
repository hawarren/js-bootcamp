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
    todosJson = JSON.stringify(todos);
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
            const rootDiv = document.createElement("div"); //element to hold our todo with checkbox in it on one line
            const mySpan = document.createElement("span");
            mySpan.textContent = item.title;

            const thisCheckBox = document.createElement("input");
            thisCheckBox.setAttribute('type', 'checkbox'); //create a checkbox and set it's type            
            const removeButtonEl = document.createElement("button");
            removeButtonEl.textContent = "x";

            thisCheckBox.checked = item.isDone
            thisCheckBox.id = item.uuid
            thisCheckBox.addEventListener('change', (e) => {

                    toggleTodo(item.uuid)
                    saveTodos()
                })
                //add our stuff to the rootdiv and then append it to the DOM
            rootDiv.appendChild(thisCheckBox);
            rootDiv.appendChild(mySpan);
            rootDiv.appendChild(removeButtonEl);

            document.querySelector("#myTodos").appendChild(rootDiv);
        });
    }
};

//Get the Dom elements for the list summary
let generateSummaryDOM = (count) => {
    let summaryEl = document.createElement("h2");
    summaryEl.textContent = `You have ${count} items left to do`;
    document.querySelector("#myTodos").appendChild(summaryEl);
};