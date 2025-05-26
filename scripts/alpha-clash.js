
function play(){
  hideElementById('home-screen');  
  showElementById('play-ground');
  hideElementById('score');
  // reset score and life
  setTextElementValueById('current-life',5);
  setTextElementValueById('current-score', 0);
  continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('score');
  // get the final score
  const lastScore = getTextElementValueById('current-score');
  setTextElementValueById('last-score', lastScore);
 // clear the last selected alphabet highlight
 const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
}

function continueGame(){
const alphabet = getARamdomAlphabet();
console.log('your alphabet', alphabet);
const currentAlphabet = document.getElementById('current-alphabet');
currentAlphabet.innerText = alphabet;
setBackgroundColorById(alphabet);

}

function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key;
  console.log('playerPressed', playerPressed);

  if(playerPressed === 'Escape'){
    gameOver();
  }
  const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const current = currentAlphabet.toLowerCase();
  //console.log(current,playerPressed);
  if(playerPressed === current){

    const currentScore = getTextElementValueById('current-score');
    const newScore = currentScore + 1;
    setTextElementValueById('current-score', newScore);
    // const currentScoreString = document.getElementById('current-score');
    // const currentScoreElement = currentScoreString.innerText;
    // const currentScore = parseInt(currentScoreElement);
    // const score = currentScore + 1;
    // currentScoreString.innerText = score;
    // console.log(score);

    removeBackgroundColorById(current);
    continueGame();
    
  }
  else{
    const currentLife = getTextElementValueById('current-life');
    const updateLife = currentLife - 1;
    setTextElementValueById('current-life', updateLife);
    console.log(currentLife,updateLife);
    // const currentLifeScoreElement = document.getElementById('current-life');
    // const currentLifeScoreString = currentLifeScoreElement.innerText;
    // const currentLifeScore = parseInt(currentLifeScoreString);
    // const currentLife = currentLifeScore - 1;
    // currentLifeScoreElement.innerText = currentLife;
    if(updateLife === 0){
  gameOver();
    }
  }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);