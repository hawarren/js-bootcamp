class HangManGame {
    constructor(word, guessesAllowed) {
        this.word = word.toLowerCase().split(""); //convet to lowercase array of characters
        this.guessedLetters = []; //['a', 'b', 'c']
        var arraysize = this.guessedLetters.sort();
        // this.wordTable = new Array(this.guessedLetters.sort().charCodeAt((guessesAllowed.length - 1) % 97)) // New empty array, sized to fit the highest letter
        this.wordTable = new Array(97);
        this.word.forEach((item) => {
            this.wordTable[item.charCodeAt(0) % 97] = item; //hash each item by it's charcode
        });
        this.guessesAllowed = guessesAllowed;
        this.status = "Playing";
    };
    getPuzzleResult() {
        let wordScore = "";
        console.log(
            `getPuzzleResult(): You have ${this.guessesAllowed} guesses left`
        );
        this.word.forEach((item) => {
            if (this.guessedLetters.includes(item)) {
                wordScore += item;
            } else {
                wordScore += "*";
            }
        });
        console.log(`wordScore is ${wordScore}`);
        return wordScore;
    };
    makeGuess(letter) {
        if (this.guessesAllowed <= 0) {
            console.log("No more guessses Allowed!");
            return;
        }
        console.log(`Calculating whether ${letter} is part of the real word \r\n`);
        //store it only if it's a new unique guess
        if (!this.guessedLetters.includes(letter)) {
            this.guessedLetters.push(letter);
        }
        if (!this.word.includes(letter)) {
            this.guessesAllowed--;
            console.log(
                `You guessed wrong so you lost a guess and now have ${this.guessesAllowed} left`
            );
            console.log(` makeGuess will return: ${false}`);
            return false;
        } else {
            console.log(
                `You guessed right so you still have ${this.guessesAllowed} left`
            );
            console.log(` makeGuess will return: ${true}`);
            return true;
        }
    };
    calculateStatus() {
        let letterMissed = false;
        //check if they've won already
        if (!this.word.every((element) => this.guessedLetters.includes(element))) {
            letterMissed = true;
        }

        if (letterMissed) {
            this.status = "Playing";
        } else {
            this.status = "Finished";
            return;
        }
        console.log(`checkGameStatus: ${this.status}`);
        //check if playing
        if (this.guessesAllowed > 0 && letterMissed) {
            this.status = "Playing";
        }
        if (this.guessesAllowed <= 0) {
            this.status = "failed";
            console.log(`HangManGame.prototype.calculateStatus = function() {
            : ${this.status}`);
            return;
        }
    };
    getStatus() {
        if (this.status == "Finished") {
            return `Good job! You guessed the word was ${this.word.join("")}`;
        } else if (this.status == "Playing") {
            return `Still playing, guesses left: ${this.guessesAllowed}`;
        } else if (this.status == "failed") {
            return `Nice try but game over"${this.word.join("")}"`;
        }
    };
}
HangManGame.prototype.getPuzzleResultUsingHash = function() {
    let wordScore = [];
    console.log(
        `getPuzzleResult(): You have ${this.guessesAllowed} guesses left`
    );
    this.word.forEach((item) => {
        //need to iterate thru guesses in the guessedletters
        //check if the issue is the "this"
        // if (this.guessedLetters.includes(item)) {
        console.log(
            `comparing ${
        this.wordTable[item.charCodeAt(0) % 97]
      } to the letter ${item} `
        );
        if (this.wordTable[item.charCodeAt(0) % 97] != item) {
            console.log(` makeGuess(): Survey says: ${this.makeGuess(item)}`);
            console.log(
                `makeGuess: Wrong Guess! Lost 1 so you have ${this.guessesAllowed} guesses left`
            );
            wordScore.push("*");
        }
        // if (this.wordTable[item.charCodeAt(0) % 97] == item)
        else {
            console.log(` makeGuess(): Survey says: ${this.makeGuess(item)}`);
            console.log(
                `makeGuess(): Correct Guess! No guess allowance used, you still ahve ${this.guessesAllowed} guesses left`
            );
            wordScore.push(item);
        }
    });

    console.log(`wordScore is ${wordScore}`);
    return wordScore;
};