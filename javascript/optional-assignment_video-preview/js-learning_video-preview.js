console.log("page loaded...");

// I was able to get this to function with purely html, 
// was javascript even needed?

function mouseoverVideo(element) {
    element.play();
}

function mouseleaveVideo(element) {
    element.pause();
    element.currentTime = 0;
}