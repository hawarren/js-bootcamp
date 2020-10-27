//HTTP (HypterText Transfer Protocol)
//Request = What do we want to do
//Response- what was actually done
//let currentPuzzleWord = "Lipid is a fat"
let realPuzzleWord = ''

realPuzzleWord = "Default Hangman Guess"
let currentGame = new HangManGame(realPuzzleWord, 5)
console.log(`${realPuzzleWord}`)
console.log(currentGame);

getPuzzle(3).then((puzzle) => {
    console.log(`my promise returned this puzzle: ${puzzle}`)
    currentGame = new HangManGame(puzzle, 5)
}, (err) => { console.log(`Error in promise: ${err}`) })

window.addEventListener("keypress", function(e) {
    const guess = String.fromCharCode(e.charCode);
    console.log(`guessing ${guess}`);
    if (currentGame.status !== 'Playing') {
        return
    }
    currentGame.makeGuess(String.fromCharCode(e.charCode));
    renderPuzzle(currentGame.puzzle);
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
if (realPuzzleWord) {
    console.log(`is the the real puzzle word? ${realPuzzleWord}`)
    renderPuzzle(currentGame.puzzle);
}
console.log('this is the last line of app.js')



getCountry('US').then((countryCode) => console.log(`This is the country code ${countryCode}`),
    (err) => console.log(`This is the Error: ${error}`))