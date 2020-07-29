//1. Set up the word instance property as an array of lower case letters
//2. Set up another instance property to store guessed letters
//3. Create a method that gives you the word puzzle back

//No guesses? -> ***
//Guess "c", "b", and "t"? c*t
const HangManGame = function(word, guessesAllowed) {
    this.word = word.toLowerCase().split('') //convert to lowercase array of characters
    this.guessedLetters = ['a', 'b', 'c']
    this.word.forEach(item => {
        this.guessedLetters.push['*'] //add an asterisk for every letter in the original word
    })
    this.guessesAllowed = guessesAllowed //number of guesses
}

HangManGame.prototype.getPuzzleResult = function() {
    //iterate through original word and compare 1st letter of guess
    //if guessletter matches wordletter, replace with asterisk
    //compare 2nd letter of guess

    //when all letterGuesses have been used, then invert guessedLetters by replacing every * with a letter and every letter with *
    //outer loop chooses a letter guess, inneer loop chooses a letter from the real word to compare
    let wordScore = []
    this.word.forEach(item => {
        wordScore.push('*') //add a placeholder asterisk for every letter in my real word
    })
    for (var i = 0; i < this.word.length; i++) {
        for (var j = 0; j < this.guessedLetters.length; j++) {
            if (this.word[i] == this.guessedLetters[j]) {
                wordScore[i] = this.word[i] //replace the asterisk in wordScore with the successful guess
                break; // we found a match, no need to check other guesses here, move on to the next letter in the word
            }
        }
    }
    return wordScore
}

let exampleOne = new HangManGame('Smart', 3)
console.log(exampleOne)
console.log(exampleOne.getPuzzleResult())

let exampleTwo = new HangManGame('Dumb', 4)
console.log(exampleTwo)
console.log(exampleTwo.getPuzzleResult())