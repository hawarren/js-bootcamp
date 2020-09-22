// console.log("Adding guess tracking /r/n");
let exampleFour = new HangManGame("Lipid", 5);
// console.log("before guess");
console.log(exampleFour);

// console.log("After good guess");
// console.log(exampleFour.getPuzzleResult());
// console.log(exampleFour);
// console.log('Try another guess')
exampleFour.makeGuess("z");
// console.log("After bad guess");
// console.log(exampleFour.getPuzzleResult());
// console.log(exampleFour);
window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    console.log(`guessing ${guess}`)

    exampleFour.makeGuess(String.fromCharCode(e.charCode))
    renderPuzzle(exampleFour.getPuzzleResult())
})


const renderPuzzle = function(myPuzzle) {
    const vDom = document.getElementById('hResult')
    vDom.innerText = `You are allowed ${exampleFour.guessesAllowed} guesses`
    const pResultDom = document.createElement('div')
    pResultDom.innerText = `The puzzle result is ${myPuzzle}`
    vDom.appendChild(pResultDom)

}

const vDom = document.getElementById('hResult')
vDom.innerText = `You are allowed ${exampleFour.guessesAllowed} guesses`
const pResultDom = document.createElement('div')
pResultDom.innerText = `The puzzle result is ${exampleFour.getPuzzleResult()}`
vDom.appendChild(pResultDom)