let incorrectSound;
let muteBtn = document.getElementById('un-muted');
let isPlaying = false;


muteBtn.addEventListener('click', function(){
    if (isPlaying) {
        // pause the audio track
        muteBtn.src = "assets/images/muted.jpeg";
        isPlaying = false;
    } else {
        // play the track
        muteBtn.src = "assets/images/speaker.png";
        isPlaying = true;
    }
})