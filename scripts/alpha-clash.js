// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//    //console.log('hi'); 

//    const playGround = document.getElementById('play-ground');
//    playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playPressed = event.key;
 console.log('player presses', playPressed);

 // stop the game if presses 'escape

if(playPressed === 'Escape'){
    gameOver();
}
 //get the expected to press
 const currentAlphabetElement = document.getElementById('current-alphabet');
 const currentAlphabet = currentAlphabetElement.innerText;
 const expectedAlphabet = currentAlphabet.toLowerCase();
 console.log(expectedAlphabet, playPressed);

 if(playPressed === expectedAlphabet){
   console.log('you got a point'); 

const currentScore = getElementValueById('current-score');
console.log(currentScore);
const updatedScore = currentScore + 1 ;
setTextElementValueById('current-score', updatedScore);
   // 1. get the current score
//    const currentScoreElement = document.getElementById('current-score');
//    const currentSoreText = currentScoreElement.innerText;
//    const currentScore = parseInt(currentSoreText);
//    //console.log(currentScore);
// // 2. increase the value of score
//    const newScore = currentScore + 1;
//    // 3. show the update
//    currentScoreElement.innerText = newScore; 
   //start a new round
   removeBackgroundColorById(expectedAlphabet);
   continueGame();
 }
 else{
console.log('loss point');
const currentLife = getElementValueById('current-life');
const updatedLife = currentLife -1;
setTextElementValueById('current-life', updatedLife);
 if(updatedLife === 0){
gameOver();
 }
//1.get the current life number 
// const currentLifeElement = document.getElementById('current-life');
// const currentLifeText = currentAlphabetElement.innerText;
// const currentLife = parseInt(currentLifeText);
// console.log(currentLife);
// //2. reduce the life count
// const newLife = currentLife - 1;
// //3. display the update life count
// currentLifeElement.innerText = newLife;
 }
}
//capture keyboard
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
const alphabet = getARandomAlphabet();
console.log(alphabet);
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color
setBackgroundColorById(alphabet);

}


function play(){
//hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');
    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
hideElementById('play-ground');
showElementById('score');
//update final score
// 1.get the final score
const lastScore = getElementValueById('current-score');
console.log(lastScore);
setTextElementValueById('last-score', lastScore);
//clear the last selected alphabet highlight
const currentAlphabet = getElementTextById('current-alphabet');
//console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet);
}

function hideElementById(elementId){
    const element = document.getElementById(elementId);
   element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    //console.log(index, alphabet);
    return alphabet;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}