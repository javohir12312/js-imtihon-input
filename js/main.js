var elForm = document.querySelector(".form");
var speakName = document.querySelector(".name");
var speakBall = document.querySelector(".ball");

var ballGrand = 70;
var ballKontrakt = 50;
var superKontrakt = 30;

var elP = document.querySelector(".text");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  if (isNaN(speakBall.value)) {
    elP.textContent = `${speakName.value} Son kiriting`;
  }
  else if(speakBall.value >= ballGrand) {
    elP.textContent = `${speakName.value} Siz grand asosida o'tdingiz`;
  }
  else if(speakBall.value > ballKontrakt){
    elP.textContent = `${speakName.value} Siz kantrakt asosida o'tdingiz`;  
  }
  else if(speakBall.value > superKontrakt) {
    elP.textContent = `${speakName.value} Siz super kontraktga kirdingiz`
  }
  else if(speakBall.value < superKontrakt){
    elP.textContent = `${speakName.value} siz o'ta olmadingiz`
  }
})