var playButton = document.getElementById("play");
var gainSlider = document.getElementById("gainSlider");
var pannerSlider = document.getElementById("pannerSlider");
var delaySlider = document.getElementById("delaySlider");

var context = new AudioContext();
var sound = new Audio("sound.wav");
var source = context.createMediaElementSource(sound);
var gainNode = context.createGain();
var panningNode = context.createStereoPanner();
var delayNode = context.createDelay(4.0);

source.connect(gainNode);
gainNode.connect(delayNode);
delayNode.connect(panningNode);
panningNode.connect(context.destination);

playButton.addEventListener("click", function(e){
    sound.play();
});

gainSlider.addEventListener("input", function(e){
    var gainValue = this.value /10;
    gainNode.gain.value = gainValue;
});