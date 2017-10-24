navigator.mediaDevices.getUserMedia({ audio: true, video: false})
.then(function(stream) {
    var context = new AudioContext();
    var liveInput = context.createMediaStreamSource(stream);
    var analyser = context.createAnalyser();

    analyser.fftSize = 2048;
    liveInput.connect(analyser);

    var array = new Uint8Array(analyser.frequencyBinCount);

    window.setInterval(function() {
        analyser.getByteFrequencyData(array);
        var volume = getAverageVolume(array);
        document.getElementById("outputLabel").innerHTML = volume + " dB";
    }, 75);

});

function getAverageVolume(array) {
    var values = 0;
    
    for (var i = 0; i < array.length; i++)
        values += array[i];
    
    return values / array.length;
}