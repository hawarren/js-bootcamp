//1. Set up the word instance property as an array of lower case letters
//2. Set up another instance property to store guessed letters
//3. Create a method that gives you the word puzzle back

//No guesses? -> ***
//Guess "c", "b", and "t"? c*t

//rewrite to make hashtable with index being the charcode (a-z is 65-90)

const HangManGame = function(word, guessesAllowed) {
    this.word = word.toLowerCase().split('') //convet to lowercase array of characters
    this.guessedLetters = ['a', 'b', 'c']
    var arraysize = this.guessedLetters.sort()
    this.wordTable = new Array(this.guessedLetters.sort().charCodeAt((guessesAllowed.length - 1) % 97)) // New empty array, sized to fit the highest letter
    this.guessedLetters.forEach(item => {
        this.wordTable[item.charCodeAt(0) % 97] = item; //hash each item by it's charcode
    })
}

HangManGame.prototype.getPuzzleResult = function() {
    let wordScore = []
    this.word.forEach(item => {
        //if the guessed letter is in the hashtable, 
        if (this.wordTable[item.charCodeAt(0) - 97] == item) {
            wordScore.push(item);
        } else {
            wordScore.push('*')
        }
    })
    return wordScore
}

let exampleOne = new HangManGame('Smart', 3)
console.log(exampleOne)
console.log(exampleOne.getPuzzleResult())

let exampleTwo = new HangManGame('Dumb', 4)
console.log(exampleTwo)
console.log(exampleTwo.getPuzzleResult())

let exampleThree = new HangManGameRewrite('Dumb', 4)
console.log(exampleThree)
console.log(exampleThree.getPuzzleResult())