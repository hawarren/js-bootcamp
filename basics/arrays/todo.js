//todo.js lesson 39
//Challenge create an array with 5 different todos
//delete the 3rd item
//add a new item onto the end
//Remove the first item from the list
let todo = ['Wake up in the morning',' Excercise for 10 minutes', 'eat a healthy breakfast', 'shower and brush teeth', 'get dressed for success']
console.log(`You have ${todo.length} things on your menu today. Here\'s the original list`)
console.log(todo)

todo.splice(2,1)
todo.push('Work as hard as you can')
todo.shift()
console.log('Here is your altered list')
console.log(todo)
