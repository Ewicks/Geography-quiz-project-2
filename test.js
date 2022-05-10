document.addEventListener('DOMContentLoaded', init);

function init() {
        let p1 = document.querySelector('p[data-number]')

        p1.addEventListener('click', play)
}

function play(ev) {
        let p = ev.currentTarget;
        ev.preventDefault();

        let fn = p.getAttribute('data-number');
        let src = '/.media/' + fn + '.mp3';
        console.log(src);

        let audio = document.getElementById('a');
        audio.src = src;
        audio.play()

}