var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var chao = {
    x: 0,
    y: 440,
    height: 60,
    width: 900,
    radius: 25,
    color: "blue",
    draw: function () {
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.color;
    },
};

var ball = {
    x: 100,
    y: 100,
    height: 50,
    width: 50,
    radius: 25,
    color: "green",
    draw: function () {
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.color;
    },
};

function draw() {
    ctx.clearRect(0, 0, 900, 500);
    chao.draw();
    ball.draw();
    if ((ball.y + ball.height) < chao.y) {
        ball.y += 6;
    }
    raf = window.requestAnimationFrame(draw);
}

raf = window.requestAnimationFrame(draw);

canvas.addEventListener("mouseout", function (e) {
    window.cancelAnimationFrame(raf);
});

ball.draw();

// movimentacao
function detecta(event) {
    let tecla = event.key
    switch(tecla) {
        case 'd':
        console.log(tecla)
    }
}