var playButton = document.getElementById("playButton");
var distortionSlider = document.getElementById("distortionSlider");

var context = new AudioContext();
var sound = new Audio("sound.wav");
var source = context.createMediaElementSource(sound);
var distortion = context.createWaveShaper();

source.connect(distortion);
distortion.connect(context.destination);

distortion.oversample = "4x";

distortionSlider.addEventListener("input", function(e){
    distortion.curve = makeDistortionCurve(this.value);
});


playButton.addEventListener("click", function(e){
    sound.play();
});

function makeDistortionCurve(amount) {    
    var n_samples = 44100,
        curve = new Float32Array(n_samples);
    
    for (var i = 0; i < n_samples; ++i ) {
        var x = i * 2 / n_samples - 1;
        curve[i] = (Math.PI + amount) * x / (Math.PI + (amount * Math.abs(x)));
    }
    
    return curve;
};