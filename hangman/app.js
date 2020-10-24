//HTTP (HypterText Transfer Protocol)
//Request = What do we want to do
//Response- what was actually done
//let currentPuzzleWord = "Lipid is a fat"
let realPuzzleWord = ''

realPuzzleWord = "lipid is a fat"
const exampleFour = new HangManGame(realPuzzleWord, 5)
console.log(`${realPuzzleWord}`)
console.log(exampleFour);

// const currentPuzzleWord =
getPuzzle(3, (error, puzzle) => {
        if (error) {
            console.log(`Error: ${error}`)
                // //return 'Aww the game is broken'
        } else {
            console.log(`callback using the puzzle ${puzzle}`)
            realPuzzleWord = puzzle
            exampleFour.resetGame(puzzle)
            renderPuzzle(realPuzzleWord)
        }
    })
    // console.log(` fuck this (line 14 app.js) ${currentPuzzleWord}`)

// const exampleFour = new HangManGame("Lipid is a fat", 5);



window.addEventListener("keypress", function(e) {
    const guess = String.fromCharCode(e.charCode);
    console.log(`guessing ${guess}`);
    if (exampleFour.status !== 'Playing') {
        return
    }
    exampleFour.makeGuess(String.fromCharCode(e.charCode));
    renderPuzzle(exampleFour.puzzle);
});

// const puzzle = getPuzzle()
// console.log(puzzle)

const renderPuzzle = (myPuzzle) => {
    exampleFour.calculateStatus();
    const vDom = document.getElementById('hResult');
    const pResultDom = document.createElement('div');
    const statusDom = document.createElement('div')
    vDom.innerText = `You are allowed ${exampleFour.guessesAllowed} guesses`;
    pResultDom.innerText = `The puzzle result is ${myPuzzle}`;
    statusDom.innerText = exampleFour.statusMessage
    vDom.appendChild(pResultDom);
    vDom.appendChild(statusDom)
};
if (realPuzzleWord) {
    console.log(`is the the real puzzle word? ${realPuzzleWord}`)
    renderPuzzle(exampleFour.puzzle);
}
console.log('this is the last line of app.js')

// console.log('Do something else')
// const puzzle = getPuzzleSync();
// console.log(puzzle)


//1.Create a function for getting the country details
//2.Call it with 2 arguments: country code, the callback function
//3.Make the HTTP request and call the callback with country information
//4. Use the callback to print the country name

//getCountry('US', (error, countryCode) => {
//     if (error) {
//         console.log(`This is the Error: ${error}`)
//     } else {
//         console.log(`This is the country code ${countryCode}`)
//     }
// })