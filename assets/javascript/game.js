//Global Variables
// ========================================================================
// Create an array of words
const word = ['soccer', 'futbol', 'baseball'];
//Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

//Dom manipulation
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main
// ========================================================================

// Create underscores based on length of word
let generateUnderscore = ()=>{
    for(let i=0; i<choosenWord; i++) {
    underscore.push('_');
    }
    return underScore;
}

//Get users guess
document.addEventListener('keypress', (event)=> {
    let keyword = String.fromCharCode(event.keyCode);
// if Users guess is right
if(choosenWord.indexOf(keyword) >-1) {
    // add to right words array
    rightWord.push(keyword);
    // replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML=underScore.join(' ');
    docRightGuess[0].innerHTML=rightWord;
    // Checks to see if user words matches guesses
    if(underScore.join('')== choosenWord) {
        alert ('You Win');
    }
}
else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML=wrongWord;
}
});
// Check if guess is right
//if right push to right array
//if wrong push to wrong array