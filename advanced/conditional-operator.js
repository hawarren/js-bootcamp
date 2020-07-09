const myAge = 27
    // const message

// if (myAge >= 18) {
//     message = 'You can vote!'

// } else {
//     message = 'You cannot vote!'
// }


const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote'
console.log(message)

const myAge2 = 27
const showPage = () => {
    console.log('Showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}
myAge2 >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'ronny', 'bobby', 'ricky']
    //1. Print "team size: 3" if less than or equal to 4
    //2. Print "Too many people on your team" otherwise


console.log(team.length >= 4 ? 'Too many people on your team' : `Team size: ${team.length}`)