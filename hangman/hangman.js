//challenge 97
//1.Display the puzzle to the browser instead of the console
//2. Display the guesses left to the browser instead of the consoel
//3.Separate the Hangman definition from the rest of the app code (use app.js)

//1. Set up the word instance property as an array of lower case letters
//2. Set up another instance property to store guessed letters
//3. Create a method that gives you the word puzzle back

//No guesses? -> ***
//Guess "c", "b", and "t"? c*t

//rewrite to make hashtable with index being the charcode (a-z is 65-90)

const HangManGame = function(word, guessesAllowed) {
    this.word = word.toLowerCase().split(""); //convet to lowercase array of characters
    this.guessedLetters = []; //['a', 'b', 'c']
    var arraysize = this.guessedLetters.sort();
    // this.wordTable = new Array(this.guessedLetters.sort().charCodeAt((guessesAllowed.length - 1) % 97)) // New empty array, sized to fit the highest letter
    this.wordTable = new Array(97);
    this.word.forEach((item) => {
        this.wordTable[item.charCodeAt(0) % 97] = item; //hash each item by it's charcode
    });
    this.guessesAllowed = guessesAllowed;
    this.status = 'Playing'
};

HangManGame.prototype.getPuzzleResultUsingHash = function() {
    let wordScore = [];
    console.log(`getPuzzleResult(): You have ${this.guessesAllowed} guesses left`)
    this.word.forEach((item) => {

        //need to iterate thru guesses in the guessedletters
        //check if the issue is the "this"
        // if (this.guessedLetters.includes(item)) {
        console.log(`comparing ${this.wordTable[item.charCodeAt(0) % 97]} to the letter ${item} `)
        if (this.wordTable[item.charCodeAt(0) % 97] != item) {
            console.log(` makeGuess(): Survey says: ${this.makeGuess(item)}`)
            console.log(`makeGuess: Wrong Guess! Lost 1 so you have ${this.guessesAllowed} guesses left`)
            wordScore.push("*")
        }
        // if (this.wordTable[item.charCodeAt(0) % 97] == item) 
        else {
            console.log(` makeGuess(): Survey says: ${this.makeGuess(item)}`)
            console.log(`makeGuess(): Correct Guess! No guess allowance used, you still ahve ${this.guessesAllowed} guesses left`)
            wordScore.push(item)
        }
    })

    console.log(`wordScore is ${wordScore}`)
    return wordScore;
};

HangManGame.prototype.getPuzzleResult = function() {
    let wordScore = '';
    console.log(`getPuzzleResult(): You have ${this.guessesAllowed} guesses left`)
    this.word.forEach((item) => {
        if (this.guessedLetters.includes(item)) {
            wordScore += item
        } else {
            wordScore += "*"
        }
    })

    console.log(`wordScore is ${wordScore}`)
    return wordScore;
};



//Create a method for making a guesss
//1. Should accept a character for guessing
//2. Should add unique guesses to list of guesses
//3. Should decrement the guesses left if a unique guess isn't a match
HangManGame.prototype.makeGuess = function(letter) {
    if (this.guessesAllowed <= 0) {
        console.log('No more guessses Allowed!')
        return
    }
    console.log(`Calculating whether ${letter} is part of the real word \r\n`)
        //store it only if it's a new unique guess
    if (!this.guessedLetters.includes(letter)) {
        this.guessedLetters.push(letter);
    }
    if (!this.word.includes(letter)) {
        this.guessesAllowed--;
        console.log(`You guessed wrong so you lost a guess and now have ${this.guessesAllowed} left`)
        console.log(` makeGuess will return: ${false}`)
        return false
    } else {
        console.log(`You guessed right so you still have ${this.guessesAllowed} left`)
        console.log(` makeGuess will return: ${true}`)
        return true
    }

};