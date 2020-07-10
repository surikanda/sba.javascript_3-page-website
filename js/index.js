
// BMI ---------
function calculateBMI(){

    var heightInFeet = Number(document.getElementById("height-feet").value);
    var heightInInches = Number(document.getElementById("height-inches").value);
    var weight = Number(document.getElementById("weight").value);
    var height = (heightInFeet * 12) + heightInInches;
    
    var bmi = Math.round((weight / (height * height)) * 703) ;
 
    
    if (bmi < 18.5){
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + " - Underweight";
    } else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmiResult").innerHTML ="Your BMI is: " + bmi + " - Normal weight";
    } else if(bmi > 24.9 && bmi <= 29.9){
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + " - Overweight";
    } else if(bmi >= 30){
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + " - Obesity";
    }
}


// Drum Kit ---------

var numberOfButtons = document.querySelectorAll(".drum").length;

for (i=0; i < numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {

    var drumButton = this.innerHTML;

    makeSound(drumButton);
    buttonAnimation(drumButton);

  }

  }

  document.addEventListener("keypress", function(event) {

      makeSound(event.key);
      buttonAnimation(event.key);
  });

  function makeSound(drumLetter) {
    if (drumLetter =="w") {
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    } else if (drumLetter == "a") {
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    } else if (drumLetter == "s") {
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    } else if (drumLetter == "d") {
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    }  else if (drumLetter == "j") {
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    } else if (drumLetter == "k") {
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    } else if (drumLetter == "l") {
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    } else {
      console.log ("this.innerHTML");
    }

  }


function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout (function (){

  activeButton.classList.remove("pressed");

}, 100);
}


