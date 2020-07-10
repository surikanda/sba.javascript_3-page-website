
document.querySelector("img.img1").src= "./img/images/dice6.png";
document.querySelector("img.img2").src= "./img/images/dice6.png";

function rollDice (){
  var randomNumber1 = Math.floor(Math.random() * 6);
  var randomNumber2 = Math.floor(Math.random() * 6);
  var imgArr = ["./img/images/dice1.png", "./img/images/dice2.png", "./img/images/dice3.png", "./img/images/dice4.png", "./img/images/dice5.png", "./img/images/dice6.png"];
  document.querySelector("img.img1").setAttribute("src", imgArr[randomNumber1]);
  document.querySelector("img.img2").setAttribute("src", imgArr[randomNumber2]);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩Player 1 wins";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 wins🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
}

