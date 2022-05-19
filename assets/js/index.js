/* jshint esversion: 11 */

document.addEventListener("DOMContentLoaded", function () {
    // on page load, hide the preloader animation
    document.getElementById("preloader").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("preloader").remove();
    }, 1000);
});