const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');
ctx.beginPath();
const x = 100; // x coordinate
const y = 75; // y coordinate
const radius = 50; // Arc radius
const startAngle = 0; // Starting point on circle
const endAngle = Math.PI*2; // End point on circle
ctx.arc(x, y, radius, startAngle, endAngle, true);
ctx.moveTo(290, 75);
ctx.arc(250, 75, 40, 0, endAngle, true);
ctx.stroke();
ctx.fill();