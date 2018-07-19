const draw = () => {
  const canvas = document.getElementById('wifi');
  const ctx = canvas.getContext('2d');
  // three rounded squares, each inside the other
  roundedRect(ctx, 1, 1, 148, 148);
  roundedRect(ctx, 2, 2, 146, 146);
  roundedRect(ctx, 3, 3, 144, 144);
  // circle at bottom left of the innermost square
  ctx.beginPath();
  ctx.arc(10, 10, 4, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  curvedBlock(ctx, 20, 20, 30);
  curvedBlock(ctx, 20, 20, 40);
};

const roundedRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
};

const curvedBlock = (ctx, x, y, r) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI/4);
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + r + 4, y);
  ctx.moveTo(x, y + r);
  ctx.lineTo(x, y + r + 4);
  ctx.arc(x, y, r + 4, 0, Math.PI/4);
  ctx.stroke();
  ctx.fill();
}; 

draw();
