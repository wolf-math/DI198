const colors = [
  'white',
  'cornsilk',
  'BlanchedAlmond',
  'darkblue',
  'cornflowerblue',
  'darkcyan',
  'green',
  'deeppink',
  'gold',
  'goldenrod',
  'lightsalmon',
  'orange',
  'tomato',
  'orangered',
  'darkorchid',
  'darkviolet',
  'violet',
  'indigo'
];

// set the selected color
let globalColor = 'white';

// Create pallete
const pallete = document.getElementById('pallete');
for (color of colors) {
  let swatch = document.createElement('div');
  swatch.classList.add('swatch');
  swatch.style.backgroundColor = color;
  pallete.appendChild(swatch);
}

pallete.addEventListener('click', (e) => {
  if (e.target.classList.contains('swatch')) {
    globalColor = e.target.style.backgroundColor;
    console.log(e.target.style.backgroundColor);
  }
});

// Create canvas
const canvas = document.getElementById('canvas');
const canvasHeight = Math.floor(canvas.clientHeight / 10);
const canvasWidth = Math.floor(canvas.clientWidth / 10);

for (let i = 0; i < canvasHeight * canvasWidth; i++) {
  console.log('created div');
  let cell = document.createElement('div');
  cell.classList.add('cell');

  // cell must have mouseenter event

  cell.addEventListener('mouseenter', (e) => {
    if (mouseDown) {
      e.target.style.backgroundColor = globalColor;
    }
  });
  canvas.appendChild(cell);
}

// mouse events
let mouseDown = false;
canvas.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('cell')) {
    console.log('CLICKS');
    e.target.style.backgroundColor = globalColor;
    mouseDown = true;
  }
});

canvas.addEventListener('mouseup', (e) => {
  console.log('UP');
  mouseDown = false;
});
