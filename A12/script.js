var playButton = document.getElementById("playButton");
var switchStereo = document.getElementById("switchStereo");
var stereoSlider = document.getElementById("stereoSlider");
var stereoSwitched = false;

var context = new  AudioContext();
var sound = new Audio("stereoSound.wav");
var source = context.createMediaElementSource(sound);
var splitter = context.createChannelSplitter(2);
var merger = context.createChannelMerger(2);
var gainLeft = context.createGain();
var gainRight = context.createGain();

source.connect(splitter);
splitter.connect(gainLeft, 0);
splitter.connect(gainRight, 1);
gainLeft.connect(merger, 0, 0);
gainRight.connect(merger, 0, 1);
merger.connect(context.destination);

stereoSlider.addEventListener("input", function(e){
    gainLeft.gain.value = (100-this.value)/100;
    gainRight.gain.value = (this.value/100)+1;
});

switchStereo.addEventListener("click", function(e){
    gainLeft.disconnect();
    gainRight.disconnect();
    
    if(stereoSwitched){
        gainLeft.connect(merger, 0, 1);
        gainRight.connect(merger, 0, 0);
    }
    else{
        gainLeft.connect(merger, 0, 0);
        gainRight.connect(merger, 0, 1);
    }
    
    stereoSwitched = !stereoSwitched;
});

playButton.addEventListener("click", function(e){
    sound.play();    
});

