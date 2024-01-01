let af;
const numLasers = 250;
const tail = 400;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const createLasers = n => {
  const lasers = [];
  for (let i = 0; i < n; ++i) {
    lasers.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: Math.random() * 2 + 1
    });
  }
  return lasers;
};

//To change laser color
const renderLaser = l => {
    const grad = ctx.createLinearGradient(l.x, l.y, l.x, l.y + tail);
    const a = 1 - (canvas.height - l.y) / canvas.height * 0.8;
    grad.addColorStop(0, `hsla(0,100%,100%,${a})`); 
    grad.addColorStop(1, "hsla(0,100%,50%,0)"); 
    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x, l.y + tail);
    ctx.stroke();
  };  

const updateLaser = l => {
    l.y += l.s; 
    if (l.y > canvas.height) {
      l.y = -tail;
      l.x = Math.random() * canvas.width;
    }
  };

//Background color and Size
const render = lasers => {
    ctx.fillStyle = "hsl(0, 0%, 0%)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    for (let l of lasers) {
      renderLaser(l);
      updateLaser(l);
    }
  
    af = requestAnimationFrame(() => render(lasers));
  };
  


const init = () => {
  cancelAnimationFrame(af);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render(createLasers(numLasers));
};
window.onresize = init;
init();