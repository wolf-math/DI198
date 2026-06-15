// step 1: Click the button to get random info
const button = document.getElementById('btn');
button.addEventListener('click', displayInfo);

async function getInfo(planetUrl = undefined) {
  const url = planetUrl
    ? planetUrl
    : `https://www.swapi.tech/api/people/${Math.floor(Math.random() * 84)}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const info = await res.json();
      return info.result.properties;
    } else {
      throw new Error('Error fetching info');
    }
  } catch {
    console.log('There was an error: ');
  }
}

// step 2: Display the info on the screen
async function displayInfo() {
  // get container
  const container = document.getElementById('container');

  // step 6: Loading indicator while fetching info
  container.innerHTML = `
    <div class="fa-3x" id="icon">
      <i class="fa-solid fa-sync fa-spin"></i>
    </div>
  `;

  const { name, gender, height, birth_year, homeworld } = await getInfo();
  const { name: planetName } = await getInfo(homeworld);

  // clear container after loading
  container.innerHTML = '';

  const nameDiv = container.appendChild(document.createElement('h1'));
  const genderDiv = container.appendChild(document.createElement('h2'));
  const heightDiv = container.appendChild(document.createElement('h2'));
  const birthDiv = container.appendChild(document.createElement('h2'));
  const homeDiv = container.appendChild(document.createElement('h2'));

  nameDiv.innerText = `Name: ${name}`;
  genderDiv.innerText = `Gender: ${gender}`;
  heightDiv.innerText = `Height: ${height}cm`;
  birthDiv.innerText = `Birth Year: ${birth_year}`;
  homeDiv.innerText = `Homeworld: ${planetName}`;
}
