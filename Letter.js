var Letter = function(letter){
    this.letter = letter;
    this.guessed = false;
    this.letterCheck = function(){
        if (this.guessed){
            console.log(this.letter);
            // return this.letter;
        } else {
            console.log("_");
            // return "_";
        };
    };
    this.playerGuess = function(userGuess){
        if (userGuess === this.letter){
            this.guessed = true;
        };
    };
};

// userGuess = "g";
// var letterTest = new Letter("g");
// letterTest.letterCheck();
// letterTest.playerGuess(userGuess);
// console.log(letterTest.guessed);


module.exports = Letter;