/*1.Setup new "status" property with initial value of "playing"
2. Create method for recalculating status to "playing","finished",or "failed".
3. Call that Method after a guess is processed
4.Use console.log to print the status
*/
const checkGameStatus = function() {
    //check if playing
    if (exampleFour.guessesAllowed > 0) {
        exampleFour.status = 'Playing!'
    }
    //check if finished
    if (exampleFour.guessedLetters.length > 0) {
        let letterMissed = false;
        exampleFour.word.forEach((element) => {
            if (exampleFour.guessedLetters.includes(element)) {

            } else {
                letterMissed = true;
            }
        });
        if (letterMissed) {
            exampleFour.status = 'Playing!'

        } else {
            exampleFour.status = 'Finished';
        }
        console.log(`checkGameStatus: ${exampleFour.status}`)
    }
    //check if failed
    if (exampleFour.guessesAllowed <= 0) {
        exampleFour.status = 'failed'
        console.log("checkGameStatus: Failed");
    }
};

// console.log("Adding guess tracking /r/n");
const exampleFour = new HangManGame("Lipid", 5);
// console.log("before guess");
console.log(exampleFour);

// console.log("After good guess");
// console.log(exampleFour.getPuzzleResult());
// console.log(exampleFour);
// console.log('Try another guess')
exampleFour.makeGuess("z");
/* console.log("After bad guess");
// console.log(exampleFour.getPuzzleResult());
console.log(exampleFour);
*/
window.addEventListener("keypress", function(e) {
    const guess = String.fromCharCode(e.charCode);
    console.log(`guessing ${guess}`);

    exampleFour.makeGuess(String.fromCharCode(e.charCode));
    renderPuzzle(exampleFour.getPuzzleResult());
});

const renderPuzzle = function(myPuzzle) {
    const vDom = document.getElementById("hResult");
    vDom.innerText = `You are allowed ${exampleFour.guessesAllowed} guesses`;
    const pResultDom = document.createElement("div");
    pResultDom.innerText = `The puzzle result is ${myPuzzle}`;
    vDom.appendChild(pResultDom);
    checkGameStatus();
};

const vDom = document.getElementById("hResult");
vDom.innerText = `You are allowed ${exampleFour.guessesAllowed} guesses`;
const pResultDom = document.createElement("div");
pResultDom.innerText = `The puzzle result is ${exampleFour.getPuzzleResult()}`;
vDom.appendChild(pResultDom);