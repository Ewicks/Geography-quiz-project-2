let incorrectSound;
let muteBtn = document.getElementById('un-muted');


muteBtn.addEventListener('click', function(){
    if (isPlaying) {
        // pause the audio track
        muteBtn.src = "assets/images/muted.jpeg";
        isPlaying = false;
        // correctSound.muted = true; //mute audio
        // incorrectSound.muted = true;
    } else {
        // play the track
        muteBtn.src = "assets/images/speaker.png";
        isPlaying = true;
    }
})