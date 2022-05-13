function switchIt() {
    var box = document.getElementById("check");
    var image2 = document.getElementById("image2")

    if (box.checked) {
        image2.checked = false;
    } else {
        image2.checked = true;
    }
}

setInterval(switchIt, 1000);

