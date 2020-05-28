//challenge: create the following functions
//fetch todos from local storage
let getSavedTodos = function() {
    let todosJson = localStorage.getItem("todos");
    if (todosJson != null) {
        return JSON.parse(todosJson);
    } else {
        return [];
    }
};

//Save todos to local storage
const saveTodos = function() {
    todosJson = JSON.stringify(todos);
    localStorage.setItem("todos", todosJson);

};
//function to toggle todos, called by event listener
const toggleTodo = function() {

    }
    //Render application todos based on filters
let renderTodos = function(todos, textFilter) {
    document.querySelector("#myTodos").textContent = "";
    let filteredItems = todos.filter(function(item) {
        let hasText = item.title.toLowerCase().includes(textFilters.searchText);
        //include if it has the text value we filtered on
        return hasText;
    });
    if (textFilters.hideCompleted) {
        //filter out completed items in place (filter and assign back to same variable)
        filteredItems = filteredItems.filter(function(item) {
            return !item.isDone;
        });
    }
    generateTodoDOM(filteredItems);
};

//1. Set up a root div
//2. Setup and append a checkbox (set type attribute)
//3. Setup and append a span (set text)
//4. Setup and append a button (set text)

//Get the DOM elements for an individual note
let generateTodoDOM = function(filteredList) {
    if (filteredList == undefined) {
        console.log("generateTodoDOM: No filteredlist to print");
    } else {
        generateSummaryDOM(filteredList.length);
        filteredList.forEach(function(item) {
                //Setup the pieces to create a single line checkbox with the text title
                const rootDiv = document.createElement("div"); //element to hold our todo with checkbox in it on one line
                const mySpan = document.createElement("span");
                mySpan.textContent = item.title;
                const thisCheckBox = document.createElement("input");
                thisCheckBox.setAttribute('type', 'checkbox'); //create a checkbox and set it's type            
                const removeButtonEl = document.createElement("button");
                removeButtonEl.textContent = "x";

                thisCheckBox.checked = item.isDone
                thisCheckBox.id = item.id
                thisCheckBox.addEventListener('change', function(e) {
                        let noteIndex = function() {
                            todos.findIndex(function(element) {
                                return element.id == thisCheckBox.id
                            })
                        })

                    if (todos[noteIndex].isDone) {
                        !todos[noteIndex].isDone
                    }

                    saveTodos()

                })
            //add our stuff to the rootdiv and then append it to the DOM
            rootDiv.appendChild(thisCheckBox); rootDiv.appendChild(mySpan); rootDiv.appendChild(removeButtonEl);

            document.querySelector("#myTodos").appendChild(rootDiv);
        });
}
};

//Get the Dom elements for the list summary
let generateSummaryDOM = function(count) {
    let summaryEl = document.createElement("h2");
    summaryEl.textContent = `You have ${count} items left to do`;
    document.querySelector("#myTodos").appendChild(summaryEl);
};