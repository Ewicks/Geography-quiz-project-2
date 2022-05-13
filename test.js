function switchIt() {
    var box = document.getElementById("check");
    var image1 = document.getElementById("un-muted")
    var image2 = document.getElementById("muted")

    if (box.checked) {
        image1 = image2;
    } else {
        image1 = image1;
    }
}

setInterval(switchIt, 1000);

