var playButton = document.getElementById("playButton");
var sliders = document.getElementsByClassName("slider");

var context = new AudioContext();
var sound = new Audio("sound.wav");
var source = context.createMediaElementSource(sound);
var compressor = context.createDynamicsCompressor();

source.connect(compressor);
compressor.connect(context.destination);

playButton.addEventListener("click", function(e){
    sound.play();
});

for (var i=0; i<sliders.length; i++){
    sliders[i].addEventListener("mousemove", changeParameter);
}

function changeParameter(){
    switch(this.id){
        case "thresholdSlider":
            compressor.threshold.value = this.value;
            break;
        case "ratioSlider":
            compressor.ratio.value = this.value;
            break;
        case "kneeSlider":
            compressor.knee.value = this.value;
            break;
        case "attackSlider":
            compressor.attack.value = this.value;
            break;
        case "releaseSlider":
            compressor.release.value = this.value;
            break;
    }
}