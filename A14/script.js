var buttons = document.getElementsByClassName("button");

var context = new AudioContext();

for (let i = 0; i < 4; i++){
    buttons[i].addEventListener("mousedown", function(e){
        var ocNode = context.createOscillator();
        ocNode.connect(context.destination);
        ocNode.frequency.value = 880;
        ocNode.start(context.currentTime);
        buttons[i].addEventListener("mouseup", function(e){
                ocNode.stop(context.currentTime);
        });
    });
}
