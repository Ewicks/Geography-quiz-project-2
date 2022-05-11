
let sound;


function preload() {
  
    // Initialize sound
    sound = loadSound("correct.mp3");
}
   
function setup() {
  
    // Playing the preloaded sound
    sound.play();
} 