var playButton = document.getElementById("play");

var context = new AudioContext();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);
var convolver = context.createConvolver();

source.connect(convolver);
convolver.connect(context.destination);

playButton.addEventListener("click", function(e){
    
    
    
//    var dropDown = document.getElementById("select");
//    var selection = dropDown.options[selection.selectedIndex].value;
    sound.play();
});
