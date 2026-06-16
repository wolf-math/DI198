const getInfo = async (search = 1) => {
  switch (search) {
    case 'prev':
      pokeId -= 1;
      break;
    case 'next':
      pokeId += 1;
      break;
    default:
      pokeId = Math.floor(Math.random() * 1025) + 1;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const info = await res.json();
      return {
        id: pokeId,
        name: info.name,
        height: info.height,
        weight: info.weight,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
      };
    } else {
      throw new Error('Error fetching info');
    }
  } catch (e) {
    console.log('There was an error: ', e);
  }
};

const displayInfo = (search) => async () => {
  const result = await getInfo(search);

  const main = document.getElementById('main');

  main.innerHTML = '';

  const { id, name, height, weight, img } = result;

  const pokeNum = document.createElement('h3');
  pokeNum.innerHTML = `Pokemon # ${id}`;
  const pokeName = document.createElement('h3');
  pokeName.innerHTML = `Name: ${name}`;
  const pokeHeight = document.createElement('h3');
  pokeHeight.innerHTML = `Height: ${height}`;
  const pokeWeight = document.createElement('h3');
  pokeWeight.innerHTML = `Weight: ${weight}`;
  const pokeImg = document.createElement('img');
  pokeImg.id = 'pokeImg';
  pokeImg.src = img;

  main.append(pokeImg, pokeNum, pokeName, pokeHeight, pokeWeight);
};

let pokeId = 0;

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const random = document.getElementById('random');

// set event listener
prev.addEventListener('click', displayInfo('prev'));
next.addEventListener('click', displayInfo('next'));
random.addEventListener('click', displayInfo('random'));
