const addArticle = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);

  const objBody = {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(data)),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  };

  fetch('https://jsonplaceholder.typicode.com/posts', objBody)
    .then((response) => {
      console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error('Wrong post');
      }
    })
    .then((obj) => {
      const result = document.getElementById('result');
      result.innerText = 'Article uploaded successfully';
    })
    .catch((error) => {
      const result = document.getElementById('result');
      result.innerText = 'Article upload unsuccessful';
      console.log(error);
    });
};

const formArticle = document.querySelector('form');
formArticle.addEventListener('submit', addArticle);
