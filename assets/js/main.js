var c = document.getElementById('trucBizarre');
var ctx = c.getContext('2d');
//fond bleu
ctx.fillStyle="blue";
ctx.fillRect(0,0,400,400);
//rayon tracteur
ctx.beginPath();
ctx.fillStyle="yellow";
ctx.moveTo(180,220);
ctx.lineTo(100,400);
ctx.lineTo(300,400);
ctx.lineTo(220,220);
ctx.lineTo(180,220);
ctx.fill();
//trucBlanc
ctx.beginPath();
ctx.fillStyle="white"
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,60,250,200);
ctx.fill();
//trucBleuClair
ctx.beginPath();
ctx.fillStyle="#e0e1f3"
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,140,300,200);
ctx.quadraticCurveTo(200,260,100,200);
ctx.fill();
//cadre
ctx.beginPath();
ctx.fillStyle="black";
ctx.fillRect(0,0,60,400);
ctx.fillRect(340,0,60,400);
//titre
ctx.beginPath();
ctx.fillStyle="black";
ctx.font="40px 'Courier New'";
ctx.fillText("PLAN 9",121,38);
ctx.fillText("FROM OUTERSPACE",10,78);
ctx.fillStyle="red";
ctx.font="40px 'Courier New'";
ctx.fillText("PLAN 9",125,40);
ctx.fillText("FROM OUTERSPACE",14,80);
