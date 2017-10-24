var context = new AudioContext();
var playButton = document.getElementById("playButton");

var audioBuffers = [];

for (let i = 0; i < 3; i++)
    getAudioData(i);
    
function getAudioData(i) {
    var audioBuffer;
    var request = new XMLHttpRequest();
    request.open('GET',  "sound1.wav", true);
    request.responseType = 'arraybuffer';
    request.onload = function () {
        var undecodedAudio = request.response;

        context.decodeAudioData(undecodedAudio, function (buffer) {
            audioBuffers[i] = buffer;
        });
    };
    request.send();
}


function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}

var tempo = 90; // BPM (beats per minute)
var eighthNoteTime = (60 / tempo) / 2;

playButton.addEventListener("click", function(e){
    playSound(audioBuffers[0], context.currentTime);
});