var elForm = document.querySelector(".form");
var speakName = document.querySelector(".name");
var speakBall = document.querySelector(".ball");

var ball = 60;

var elP = document.querySelector(".text");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  if (isNaN(speakBall.value)) {
    elP.textContent = `${speakName.value} Son kiriting`;
  }
  else if(speakBall.value >= ball) {
    elP.textContent = `${speakName.value} Siz o'tdingiz`;
  }
  else if(speakBall.value < ball){
    elP.textContent = `${speakName.value} Siz o'ta olmadingiz yana bir bor urinib ko'ring!`;  
  }
})