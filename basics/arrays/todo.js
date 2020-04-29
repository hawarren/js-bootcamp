//todo.js lesson 39
//Challenge create an array with 5 different todos
//delete the 3rd item
//add a new item onto the end
//Remove the first item from the list
let todos = [{ title: 'Wake up in the morning', isDone : true }
    , { title: ' Exercise for 10 minutes', isDone : false }
    , { title: 'eat a healthy breakfast', isDone : true }
    , { title: 'shower and brush teeth', isDone : false }
    , { title: 'buy food', isDone : false }
    , { title: 'get dressed for success', isDone : true }
]
console.log(`You have ${todos.length} things on your menu today. Here\'s the original list`)
console.log(todos)

// todos.splice(2, 1)
// todos.push('Work as hard as you can')
// todos.shift()
console.log('Here is your altered list')
console.log(todos)
//1. Convert array of strings to objects -> text, completed (boolean)
//2.create a function to remove a todo by text value (case insensitive)

let deleteTodo = function (list, stringToMatch) {

   const indexItemToRemove = list.findIndex(function (item, index) {
        return item.title.trim().toLowerCase() === stringToMatch.trim().toLowerCase()
    }
    )
    if (indexItemToRemove > -1)
    {
        console.log(`deleting ${list[indexItemToRemove].title} which is in position ${indexItemToRemove}`)
        list.splice(indexItemToRemove, 1)
        console.log(list)
    }
    else{
        console.log(`\'${stringToMatch}\` is nowhere to be found`)
    }
}
// console.log('Now let us remove the eat a healthy breakfast item')
// deleteTodo(todos, 'dont eat a healthy breakfast')
// deleteTodo(todos, 'eat a healthy breakfast')
//console.log(todos)
//challenge: Create a filtered list that removes the  completed items
const filteredTodoList = function (notes){
    return notes.filter(function(note, index){
        //const isComplete = note.isDone.toLowerCase().trim().includes('false')
        return !note.isDone
        //return isComplete
    })
}
const doneList = function(notes){
    return notes.filter(function(note, index){
        return note.isDone
    })
}
console.log('Here are your incomplete tasks')
console.log(filteredTodoList(todos))
console.log('Here is what you have already done')
console.log(doneList(todos))