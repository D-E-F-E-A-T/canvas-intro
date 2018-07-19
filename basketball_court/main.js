const draw = () => {
  canvas = document.getElementById('basketball-court');
  ctx = canvas.getContext('2d');
// outline of exterior
  ctx.fillRect(0, 0, 400, 600); 
  ctx.strokeRect(0, 0, 400, 300);  
  ctx.strokeRect(300, 0, 400, 300);  

};

draw();