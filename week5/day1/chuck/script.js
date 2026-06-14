// Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:

const url = 'https://api.chucknorris.io/jokes/random?category=dev';

// Check out the API Chuck Norris Documentation : https://api.chucknorris.io/

// Make sure to check the Response status and throw an error accordingly

// step 1: console log the info

function retrieveData() {
  fetch(url)
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error("That's not funny!");
      }
    })
    .then((data) => {
      console.log(data.value);
      displayData(data.value);
    })
    .catch((error) => console.log(error));
}

// step 2: display it on the DOM.

function displayData(joke) {
  const par = document.getElementById('par');
  par.innerText = joke;
}

const btn = document.getElementById('btn');
btn.addEventListener('click', retrieveData);
