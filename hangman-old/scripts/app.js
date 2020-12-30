const puzzleEl = document.getElementById("puzzleEl");
const guessesEl = document.getElementById("guesses");
const statusEl = document.getElementById("status")

let realPuzzleWord = "";

let currentGame = null;
console.log(`${realPuzzleWord}`);
console.log(currentGame);

// getPuzzle(3).then((puzzle) => {
//     console.log(`my promise returned this puzzle: ${puzzle}`)
//     currentGame = new HangManGame(puzzle, 5)
// }, (err) => { console.log(`Error in promise: ${err}`) })

getPuzzleFetchAsync(5)
    .then((data) => {
        console.log(`My fetch version of puzzle: ${data}}`);
        currentGame = new HangManGame(data, 10);
        // return currentGame
        console.log(`replaced currentGame with ${data.puzzle}`);
        return currentGame;
    })
    // .then((currentGame) => {
    //     renderPuzzle(currentGame.puzzle);
    //     console.log(`rerendered currentGame with ${currentGame.puzzle}`);
    // })
    .catch((err) => {
        console.log(`puzzleFetch returned an error ${err}`);
    });

window.addEventListener("keypress", function(e) {
    const guess = String.fromCharCode(e.charCode);
    console.log(`guessing ${guess}`);
    if (currentGame.status !== "Playing") {
        return;
    }
    currentGame.makeGuess(String.fromCharCode(e.charCode));
    renderPuzzle();
});

const renderPuzzle = () => {
    puzzleEl.innerHTML = ''
    currentGame.calculateStatus();
    // guessesEl.textContent = `You are allowed ${currentGame.guessesAllowed} guesses`;
    //puzzleEl.textContent = `${currentGame.puzzle}`;
    guessesEl.textContent = currentGame.statusMessage;
    //1. For each character in the string, add a span into #puzzle
    //2. The spans text should be the letter itself
    puzzleEl.innerHTML = ''
    const puzzleArray = currentGame.puzzle.split("")
    currentGame.puzzle.split("").forEach((item) => {
        const letterEl = document.createElement("span")
        letterEl.innerText = item
        puzzleEl.appendChild(letterEl)
    })
};



const startGame = async() => {
    const puzzle = await getPuzzleFetchAsync(2)
    currentGame = new HangManGame(puzzle, 5)
    renderPuzzle()
}


document.querySelector('#reset').addEventListener('click', startGame)
    // getCurrentCountry().then(
    //     (country) => {
    //         console.log(` Region and name: ${country.region}, ${country.name}`)
    //     },
    //     (error) => {
    //         console.log(error);
    //     }
    // );


startGame()