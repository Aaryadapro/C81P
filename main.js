canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth="1";
ctx.rect(190, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth="4";
ctx.arc(300, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth="4";
ctx.arc(340, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth="4";
ctx.arc(390, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth="4";
ctx.arc(430, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth="4";
ctx.arc(480, 210, 40, 0, 2 * Math.PI);
ctx.stroke();