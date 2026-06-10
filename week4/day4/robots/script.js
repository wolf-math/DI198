const robots = [
  {
    id: 1,
    name: 'Yaakov Stolovitsky',
    username: 'Yak',
    email: 'admin@guitarbuild.com'
  },
  {
    id: 2,
    name: 'Ariel Zinger',
    username: 'zinger',
    email: 'ariel@zinger.dev'
  },
  {
    id: 3,
    name: 'Vasiliy Novikov',
    username: 'SillyVas',
    email: 'surferdude@gmail.net'
  },
  {
    id: 4,
    name: 'Aaron Wolf',
    username: 'Wolfrey',
    email: 'me@wolfcodes.dev'
  },
  {
    id: 5,
    name: 'Hans Gruber',
    username: 'Money_Man',
    email: 'yippie_ki_ay@mf.ca'
  },
  {
    id: 6,
    name: 'Dave Grohl',
    username: 'Foo_Fighter',
    email: 'drumvana@ff.info'
  },
  {
    id: 7,
    name: 'Norman Osbourne',
    username: 'goblin',
    email: 'green.goblin@spider-man.biz'
  },
  {
    id: 8,
    name: 'Steve Jobs',
    username: 'apple2',
    email: 'sjobs@apple.com'
  },
  {
    id: 9,
    name: 'Jimi Hendrix',
    username: 'Hey_joe',
    email: 'acidman@electricladyland.com'
  },
  {
    id: 10,
    name: 'George Washington',
    username: 'freedomMan',
    email: 'cherryTree@philadelphia.gov'
  },
  {
    id: 11,
    name: 'Benjamin Netanyahu',
    username: 'bibi',
    email: 'rosh.hamemshela@gov.il'
  },
  {
    id: 12,
    name: 'Cabbage Man',
    username: 'MYCABBAGES',
    email: 'cart@cabbagecorp.org'
  }
];

const container = document.getElementById('container');

function displayBots(robotPeople) {
  robotPeople.forEach((robot) => {
    // create card
    let rob = document.createElement('div');
    rob.setAttribute('class', 'card');

    // create info
    let pic = document.createElement('img');
    let name = document.createElement('h3');
    let username = document.createElement('h3');
    let email = document.createElement('h3');

    // set info into the card
    pic.setAttribute('src', `https://robohash.org/${robot.name}`);
    name.innerText = robot.name;
    username.innerText = robot.username;
    email.innerText = robot.email;

    rob.appendChild(pic);
    rob.appendChild(name);
    rob.appendChild(username);
    rob.appendChild(email);

    // add the card to the DOM
    container.appendChild(rob);
  });
}

displayBots(robots);

// filter on search
function filterBots(searchPhrase) {
  container.innerHTML = '';
  const filteredBots = robots.filter((bot) => {
    const searchLower = searchPhrase.toLowerCase();

    return (
      bot.name.toLowerCase().includes(searchLower) ||
      bot.username.toLowerCase().includes(searchLower) ||
      bot.email.toLowerCase().includes(searchLower)
    );
  });

  displayBots(filteredBots);
}

const search = document.getElementById('search');
search.addEventListener('input', (e) => {
  filterBots(e.target.value);
});
