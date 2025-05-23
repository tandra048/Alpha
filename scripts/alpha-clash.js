// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//    //console.log('hi'); 

//    const playGround = document.getElementById('play-ground');
//    playGround.classList.remove('hidden');
// }
function continueGame(){
const alphabet = getARandomAlphabet();
console.log(alphabet);
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color
setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
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