//HTTP (HypterText Transfer Protocol)
//Request = What do we want to do
//Response- what was actually done
//let currentPuzzleWord = "Lipid is a fat"
let realPuzzleWord = ''

realPuzzleWord = "Default Hangman Guess"
    //let currentGame = new HangManGame(realPuzzleWord, 5)
let currentGame = null
console.log(`${realPuzzleWord}`)
console.log(currentGame);

// getPuzzle(3).then((puzzle) => {
//     console.log(`my promise returned this puzzle: ${puzzle}`)
//     currentGame = new HangManGame(puzzle, 5)
// }, (err) => { console.log(`Error in promise: ${err}`) })



getPuzzleFetch(5)
    .then((data) => {
        console.log(`My fetch version of puzzle: ${data.puzzle}}`)
        currentGame = new HangManGame(data.puzzle, 10)
            // return currentGame
        console.log(`replaced currentGame with ${data.puzzle}`)
        return currentGame
    })
    .then((currentGame) => {
        renderPuzzle(currentGame.puzzle)
        console.log(`rerendered currentGame with ${currentGame.puzzle}`)
    })
    .catch((err) => {
        console.log(`puzzleFetch returned an error ${err}`)
    })



window.addEventListener("keypress", function(e) {
    if (currentGame) {

        const guess = String.fromCharCode(e.charCode);
        console.log(`guessing ${guess}`);
        if (currentGame.status !== 'Playing') {
            return
        }
        currentGame.makeGuess(String.fromCharCode(e.charCode));
        renderPuzzle(currentGame.puzzle);
    }
});

const renderPuzzle = (myPuzzle) => {
    currentGame.calculateStatus();
    const vDom = document.getElementById('hResult');
    const pResultDom = document.createElement('div');
    const statusDom = document.createElement('div')
    vDom.innerText = `You are allowed ${currentGame.guessesAllowed} guesses`;
    pResultDom.innerText = `The puzzle result is ${myPuzzle}`;
    statusDom.innerText = currentGame.statusMessage
    vDom.appendChild(pResultDom);
    vDom.appendChild(statusDom)
};
// if (realPuzzleWord.length > 0) {
//     console.log(`is the the real puzzle word? ${realPuzzleWord}`)
//     renderPuzzle(currentGame.puzzle);
// }




getCountry('US').then((countryCode) => console.log(`This is the country code ${countryCode}`),
    (err) => console.log(`This is the Error: ${error}`))

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then(
//     (data) => {
//         console.log(` puzzle from fetch method: ${data.puzzle}`)
//     }
// ).catch((error) => {
//     console.log(error)
// })

console.log('this is the last line of app.js')