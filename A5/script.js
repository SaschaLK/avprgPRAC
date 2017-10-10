var context = new AudioContext();

var audio1 = new Audio("sound1.wav");
var audio2 = new Audio("sound2.wav");
var audio3 = new Audio("sound3.wav");
var audio4 = new Audio("sound4.wav");

var source1 = context.createMediaElementSource(audio1);
var source2 = context.createMediaElementSource(audio2);
var source3 = context.createMediaElementSource(audio3);
var source4 = context.createMediaElementSource(audio4);

source1.connect(context.destination);
source2.connect(context.destination);
source3.connect(context.destination);
source4.connect(context.destination);

document.getElementById("key1").addEventListener("mousedown", function(e){
    audio1.play();
});
document.getElementById("key2").addEventListener("mousedown", function(e){
    audio2.play();
});
document.getElementById("key3").addEventListener("mousedown", function(e){
    audio3.play();
});
document.getElementById("key4").addEventListener("mousedown", function(e){
    audio4.play();
});