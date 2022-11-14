function doFirst() {
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
    var g = canvas.createLinearGradient(10, 10, 150, 150);
    g.addColorStop(.0, "blue");
    g.addColorStop(.5, 'green');
    g.addColorStop(1, 'red');
    canvas.fillStyle = g;
    canvas.fillRect(10, 10, 150, 150);
}

window.addEventListener("load", doFirst, false);