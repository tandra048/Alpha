function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARamdomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const random = Math.random() * 25;
    const index = Math.round(random);
    const alphabet = alphabets[index];
    //console.log(index , alphabet);
    return alphabet;

}

function setBackgroundColorById(elementId){
    const  element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
const elementValueText = element.innerText;
const elementValue = parseInt(elementValueText);
return elementValue;
}


function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText  = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}