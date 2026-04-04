// main.js
let grid = document.querySelectorAll(".scroll-container");
let divs = document.querySelectorAll(".scroll-container div")


const canvas = document.getElementById("blobCanvas");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const blobCount = 10; // Number of blobs
const blobs = [];

// ====== Blob Class ======
class Blob {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 80 + Math.random() * 60;
        this.color = `hsla(${Math.random() * 360}, 80%, 60%, 0.6)`;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x - this.radius < 0 || this.x + this.radius > width) this.vx *= -1;
        if (this.y - this.radius < 0 || this.y + this.radius > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ====== INITIALIZE BLOBS ======
for (let i = 0; i < blobCount; i++) {
    blobs.push(new Blob());
}

// ====== ANIMATION LOOP ======
function animate() {
    ctx.clearRect(0, 0, width, height);

    // Optional: blend colors for a smooth effect
    ctx.globalCompositeOperation = "lighter";

    blobs.forEach(blob => {
        blob.update();
        blob.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// ====== HANDLE RESIZE ======
window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

function getRandomColor() {
    return 'hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)';
}

//change the background color evert second
setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 1000)
