var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight + 20;

var c = canvas.getContext('2d');

function drawDiamond(c, x, y, width, height) {
    c.save();
    
    c.beginPath();
    c.moveTo(x, y);

    c.lineTo(x - width / 2, y + height / 2);

    c.lineTo(x, y + height);

    c.lineTo(x + width / 2, y + height / 2);

    c.closePath();

    c.fillStyle = 'white';
    c.fill();

    c.restore();
}

var boxSize = 60;
var boxDistance = boxSize + 5;
var center = (boxSize * 3 + 15) / 2;
var diamondX = boxSize * 3.16 - center;
var diamondY = -boxSize * 0.4 - center;


c.translate(innerWidth / 2, innerHeight / 2);

function draw () {
    c.fillStyle = 'white';
    c.fillRect(0 - center, 0 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 0 - center, boxDistance * 1 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 0 - center, boxDistance * 2 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 1 - center, boxDistance * 0 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 1 - center, boxDistance * 1 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 1 - center, boxDistance * 2 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 2 - center, boxDistance * 1 - center, boxSize, boxSize);
    c.fillRect(boxDistance * 2 - center, boxDistance * 2 - center, boxSize, boxSize);
    
    drawDiamond(c, diamondX, diamondY, boxSize * 1.4, boxSize * 1.4);
}

let i = 0;

c.rotate(-260 * Math.PI / 180)

for (i; i < 100; i++) {
    setTimeout(() => {
        c.translate(-200, -200)
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.translate(200, 200)
        c.rotate(-1 * Math.PI / 180);
        draw();
    }, 15 * i)
}

let old_i = i;


var initFontSize = 122.16;
var initFontX = 106;
var initFontY = 92;
var initSymbolSize = 82.16;
var initSymbolX = 737;
var initSymbolY = 68;
var initAlpha = 0;

for (i; i < old_i + 42; i++) {
    setTimeout(() => {
        c.translate(-200, -200)
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.translate(200 - i + old_i + 38.2, 200)

        boxSize -= 1;
        boxDistance -= 1;
        center = (boxSize * 3 + 15) / 2;
        diamondX -= 1.48;
        diamondY += 1.93;
        draw()
        c.globalAlpha = initAlpha
        c.font = `${initFontSize}px Handel Gothic D`;
        c.fillText("Syncfusion", initFontX, initFontY);
        c.font = `${initSymbolSize}px Handel Gothic D`;
        c.fillText('®', initSymbolX, initSymbolY);

        initFontSize -= 1.48;
        initFontX -= 1.69;
        initFontY -= 1.476;
        initSymbolSize -= 1.48;
        initSymbolX -= 9.404;
        initSymbolY -= 1.478;
        initAlpha += 0.0281;
    }, 15 * i)
}

let ii = 0;

var str = 'Deliver innovation with ease®';

var increase = -34.2;

setTimeout(() => {
    setInterval(() => {
            console.log(ii);
            c.font = '25px Segoe UI';
            c.fillText(str.charAt(ii), increase, 60);
            if (str.charAt(ii) == 'i' || str.charAt(ii) == 'l') {
                increase = increase + 8;
            } else if (str.charAt(ii) == 'w') {
                increase = increase + 19;
            } else if (str.charAt(ii) == 't') {
                increase = increase + 10;
            } else if (str.charAt(ii) == 'D') {
                increase = increase + 17;
            } else if (str.charAt(ii) == 'n' || str.charAt(ii) == 'o') {
                increase = increase + 13;
            } else {
                increase = increase + 12;
            }
            ii++;
    }, 50);
}, 2840)
