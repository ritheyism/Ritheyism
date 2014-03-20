// JavaScript source code
var myVideo = document.getElementById("Layla_live");
function playPause() {
    if 
                (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 700;
}

function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 384;
}
