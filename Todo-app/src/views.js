import { textFilters } from './filters';
import { todos, saveTodos, toggleTodo, removeTodo } from './todos';


const todoDomEL = document.querySelector("#myTodos")
// renderTodos
// Arguments: none
// Return value: none

const renderTodos = () => {
    todoDomEL.textContent = "";
    const { searchText, hideCompleted } = textFilters
    let filteredItems = todos.filter((item) => {
         const completedMatch = hideCompleted  && item.isDone
        return item.title.toLowerCase().includes(searchText) && !completedMatch

    }
    );
    

generateTodoDOM(filteredItems);
};

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
//Get the DOM elements for an individual note
const generateTodoDOM = (filteredList) => {
    if (!filteredList) {
        console.log("generateTodoDOM: No filteredlist to print");
    } else {
        if (filteredList == 0) {
            const emptyEl = document.createElement('p')
            emptyEl.classList.add('empty-message')
            emptyEl.textContent = 'No todo messages to show'
            todoDomEL.appendChild(emptyEl)
        }
        else {
            generateSummaryDOM(filteredList.length);
            filteredList.forEach((item) => {
                //Setup the pieces to create a single line checkbox with the text title
                const todoEl = document.createElement("label");
                const containerEl = document.createElement('div')
                const thisCheckBox = document.createElement("input");
                const todoTextEl = document.createElement("span");
                const removeButtonEl = document.createElement("button");

                todoTextEl.textContent = item.title;
                removeButtonEl.textContent = "delete";
                removeButtonEl.classList.add('button', 'button--text')
                removeButtonEl.addEventListener('click', (e) => {
                    let indexToRemove = todos.findIndex((todo) => {
                        return item.uuid == todo.uuid
                    })

                    removeTodo(todos[indexToRemove].uuid)
                    renderTodos()

                })

                thisCheckBox.setAttribute('type', 'checkbox'); //create a checkbox and set it's type            
                thisCheckBox.checked = item.isDone
                thisCheckBox.id = item.uuid
                thisCheckBox.addEventListener('change', (e) => {
                    toggleTodo(item.uuid)
                })
                //add our stuff to the parent element and then append it to the DOM
                containerEl.appendChild(thisCheckBox);
                containerEl.appendChild(todoTextEl);
                todoEl.appendChild(containerEl)
                todoEl.appendChild(removeButtonEl);

                //setup container
                todoEl.classList.add('list-item')
                containerEl.classList.add('list-item__container')

                todoDomEL.appendChild(todoEl);
            });
        }
    }
};


// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (count) => {
    let summaryEl = document.createElement("h2");
    const plural = count == 1 ? '' : 's'
    summaryEl.textContent = `You have ${count} item${plural} left to do`;
    summaryEl.classList.add('list-title')
    todoDomEL.appendChild(summaryEl);
};
// Make sure to set up the exports
export { todoDomEL, renderTodos, generateTodoDOM, generateSummaryDOM }