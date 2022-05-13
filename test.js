function switchIt() {
    var box = document.getElementById("check");
    var image1 = document.getElementById("un-muted")
    var image2 = document.getElementById("muted")

    if (box.checked) {
        document.getElementById("muted").src = "assets/images/muted";
    } else {
        image1 = true;
    }
}

setInterval(switchIt, 1000);

