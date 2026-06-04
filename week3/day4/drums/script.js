const sounds = [
  { drum: 'boom', key: 'a', file: new Audio('./sounds/boom.wav') },
  { drum: 'clap', key: 's', file: new Audio('./sounds/clap.wav') },
  { drum: 'hihat', key: 'd', file: new Audio('./sounds/hihat.wav') },
  { drum: 'kick', key: 'f', file: new Audio('./sounds/kick.wav') },
  { drum: 'openhat', key: 'g', file: new Audio('./sounds/openhat.wav') },
  { drum: 'ride', key: 'h', file: new Audio('./sounds/ride.wav') },
  { drum: 'snare', key: 'j', file: new Audio('./sounds/snare.wav') },
  { drum: 'tink', key: 'k', file: new Audio('./sounds/tink.wav') },
  { drum: 'tom', key: 'l', file: new Audio('./sounds/tom.wav') }
];

const container = document.getElementById('container');

for (sound of sounds) {
  let soundBtn = document.createElement('div');
  soundBtn.innerText = sound.drum;
  soundBtn.addEventListener('click', () => {});
  container.appendChild(soundBtn);
}

document.addEventListener('keydown', (e) => {
  console.log(e.key);
});

function playSound(keyVal) {}
