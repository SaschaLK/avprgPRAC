var playButton = document.getElementById("playButton");
var frequencySlider = document.getElementById("frequencySlider");
var gainSlider = document.getElementById("gainSlider");
var detuneSlider = document.getElementById("detuneSlider");

var context = new AudioContext();
var sound = new Audio("sound.wav");
var source = context.createMediaElementSource(sound);
var filter = context.createBiquadFilter();

source.connect(filter);
filter.connect(context.destination);

filter.type = "lowpass";
filter.frequency.value = frequencySlider.value;
filter.detune.value = detuneSlider.value;
filter.Q.value = detuneSlider.value;
filter.gain.value = gainSlider.value;

playButton.addEventListener("click", function(e){
    sound.play();
});

