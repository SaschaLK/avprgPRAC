var context = new AudioContext();
var oscillatorNode = context.createOscillator();
var gainNode = context.createGain();
var mousedown = false;

oscillatorNode.connect(gainNode);
gainNode.connect(context.destination);

gainNode.gain.value = 0.03;
oscillatorNode.frequency.value = 880;

oscillatorNode.start(context.currentTime);
oscillatorNode.stop(context.currentTime + 1);

document.body.addEventListener('mousedown', function(e){
   mousedown=true;
    oscillatorNode = context.createOscillator();
    oscillatorNode.connect(gainNode);
    oscillatorNode.start(context.currentTime);
});

document.body.addEventListener('mousemove', function(e){
    if(mousedown){
        console.log(e.clientX);
        console.log(e.clientY);

        oscillatorNode.frequency.value = (e.clientX);
        gainNode.gain.value = (e.clientY)/2000;

        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }
});

document.body.addEventListener('mouseup', function(e){
    mousedown=false;
    oscillatorNode.stop(context.currentTime);
});