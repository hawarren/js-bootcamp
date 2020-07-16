const HangManGame = function(word, guessesAllowed) {
    this.word = word
    this.guessesAllowed = guessesAllowed
}
let exampleOne = new HangManGame('Smart', 3)
console.log(exampleOne)

let exampleTwo = new HangManGame('Dumb', 4)
console.log(exampleTwo)