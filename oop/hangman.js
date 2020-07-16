//1. Create a constructor function for the hangman game
//2. Setup two attributes. One for the word itself. Another for the number of guesses allowed
//3. Create two instances of it and print both to the console

const HangManGame = function(word, guessesAllowed) {
    this.word = word
    this.guessesAllowed = guessesAllowed
}

let exampleOne = new hangManGame('Smart', 3)
console.log(exampleOne)

let exampleTwo = new hangManGame('Dumb', 4)
console.log(exampleTwo)