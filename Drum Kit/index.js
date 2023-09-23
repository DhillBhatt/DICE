/*document.querySelector("button").addEventListener("click", function(){
    alert("I got clicked");
});

^^^ You can also write the event listenr with anonymous functions where you simple include the function itself without a name in the event listener, like below;

document.querySelector("button").addEventListener("click", function (){
  alert("I got clicked");
});
*/

/*DETECTING MOUSECLICK*/
var button = document.querySelectorAll(".drum");

for (var i = 0; i < button.length; i++) {   /* 1. I store all the elements with the class name drum in the variable button. 2. Then using a for loop, I add the click event listener to each button starting with the firs (0), then I increment until I reach the max number of buttons (i < button.length). Finally I select the button via its position button[i] and add the event listner.*/

  button[i].addEventListener("click", function() {
    var innerHTML = this.innerHTML;
    makeSound(innerHTML);
    buttonAnimation(innerHTML);
  });
};


  /*DETECTING KEYBOARD PRESS*/
  document.addEventListener("keydown", function() {
    makeSound(event.key);
    buttonAnimation(event.key);  /*event.key pulls the spcific key for the button pressed.*/
  });

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/crash.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/snare.mp3");
      kick.play();
      break;

    default:
      console.log(innerHTML);
  }
};
/*ADDING TIMEOUT ANIMATION EFFECT TO BUTTONS*/
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);  /* We have to concantenate "." to reference the class name of the button aka "." + w = .w the inner class name of the specific button */
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
};
