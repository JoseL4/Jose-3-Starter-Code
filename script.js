/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening');
let buttonOne = document.querySelector('.option-one')
let buttonTwo = document.querySelector('.option-two')
let buttonThree = document.querySelector('.option-one-continue')
let buttonFour = document.querySelector('.option-two-continue')
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let press = document.querySelector('.press');
let background = document.querySelector('body');
let music = document.querySelector('.music');

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */

buttonOne.onclick = function() {
  optionOneScreen.style.display = 'block';
  storyOpening.style.display = 'none';
  buttonOne.style.display = 'none';
  buttonTwo.style.display = 'none';
};

buttonTwo.onclick = function() {
  optionTwoScreen.style.display = 'block';
  storyOpening.style.display = 'none';
  buttonOne.style.display = 'none';
  buttonTwo.style.display = 'none';
};

buttonThree.onclick = function() {
  optionOneScreen.style.display = 'none';
  optionOneEnd.style.display = 'block';
};

buttonFour.onclick = function() {
  optionTwoScreen.style.display = 'none'
  optionTwoEnd.style.display = 'block'
}

press.onclick = function() {
  press.innerHTML = 'Turns out you fought back, and managed to win against the clown. But at what cost?';
  background.style.backgroundColor = 'beige';
}

music.onclick = function(){
  document.getElementById('.audio').play();
  document.getElementById('.audio').pause();
}