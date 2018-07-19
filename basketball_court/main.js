const draw = () => {
  canvas = document.getElementById('basketball-court');
  ctx = canvas.getContext('2d');
// outline of exterior
  ctx.fillRect(x, y, w, h); 

};

draw();