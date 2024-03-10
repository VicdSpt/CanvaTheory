var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'rgba(200,0,0,0.5)';
// ctx.fillRect(30,30,100,50);
// ctx.clearRect(0,0,302,152);

// ctx.strokeRect(30,30,100,50)

// ctx.beginPath();
// ctx.rect(50,50,100,50);
// ctx.stroke();
// ctx.fill();


// for( var i = 0; i < 6; i++){
//     for(j = 0; j < 6; j++){
// ctx.fillStyle = `rgb(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${42.5 * i})`
// ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
// }

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.lineTo(75,50);
// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.arc(75,75,50,0,2*Math.PI);
// ctx.stroke();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function init() {
    ctx.font = '40px serif';
    // ctx.strokeText('hello world', 50, 80);
    ctx.fillStyle = "red";
    ctx.fillText('hello world', 50, 80);
}
init();

// canvas.setAttribute('width', '500');
// canvas.setAttribute('height', '200');


var x = 200;
var v = 5;

function init(){
    // Save & Restore
    // ctx.fillRect(0,0,150,150);
    // ctx.save();

    // ctx.fillStyle="red";
    // ctx.fillRect(15,15,120,120);

    // ctx.save();

    // ctx.fillStyle="blue";
    // ctx.fillRect(30,30,90,90);

    // ctx.restore();
    // ctx.fillRect(45,45,60,60);

    // ctx.translate(50,50),
    // ctx.fillRect(0,0,100,150);

    requestAnimationFrame(init)
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
    ctx.beginPath();
    ctx.arc(x, 200,60,0,Math.PI * 2);
    ctx.strokeStyle = 'crimson';
    ctx.stroke();

    if(x +  60 > innerWidth || x - 60 < 0){
        v = - v;
    }

    x += v;
}



