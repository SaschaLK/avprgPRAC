var playButton = document.getElementById("play");

var context = new AudioContext();
var sound = new Audio("sounds/sound.wav");
var source = context.createMediaElementSource(sound);
var convolver = context.createConvolver();

source.connect(convolver);
convolver.connect(context.destination);

playButton.addEventListener("click", function(e){
    
    var selection = document.getElementById("select").value;
    
    var request = new XMLHttpRequest();
    request.open("GET",  "sounds/" + selection + ".wav", true);
    request.responseType = "arraybuffer";

    request.onload = function () {
        var undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            convolver.buffer = buffer;
            convolver.normalize = true;
        });
    };
    request.send();
    sound.play();
});