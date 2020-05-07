let todos = [{ title: 'Wake up in the morning', isDone : true }
    , { title: ' Exercise for 10 minutes', isDone : false }
    , { title: 'eat a healthy breakfast', isDone : true }
    , { title: 'shower and brush teeth', isDone : false }
    , { title: 'buy food', isDone : false }
    , { title: 'get dressed for success', isDone : true }
]
//print summary message: "You have x todos left"
//add a paragraph for each todo item
//get a filtered list of items left todo
const itemsLeft = todos.filter(function (item){
    return item.isDone //== 'false'
})
//create a header for our summary
const summary = document.createElement('h2')

summary.textContent = `You have ${itemsLeft.length} things to do`
document.querySelector('body').appendChild(summary)

itemsLeft.forEach(function (item){
    let itemToAdd = document.createElement('p')
    itemToAdd.textContent = item.title
    document.querySelector('body').appendChild(itemToAdd)
})
