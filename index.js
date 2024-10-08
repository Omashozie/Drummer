// For Detecting the button pressed from the drum selector using a mouse

var numberOfSounds = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfSounds; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonText = this.innerHTML;
        makeSound(buttonText);
        KeyAnimation(buttonText);
    });
}

// For Detecting the keyboard pressed from the phone or system keypad using the keyboard
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    KeyAnimation(event.pressedkey);
})
  // THE SET OF FUNCTION AND THE SWITCH STATEMENT
function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(key);
    }
    
}
//To add a flash key animation, when its pressed.

function KeyAnimation(pressedkey){
var activeButton = document.querySelector("." + pressedkey);
activeButton.classList.add("pressed");
setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100);
} //the setTimeout is use to add a flash to the added classlist so as to remove after been pressed.