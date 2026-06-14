const displayArtwork = (art) => {
  const { title, artist_title: artist } = art.data;
  const paragraph = document.querySelector('#info-art');
  paragraph.textContent = `The painting is named ${title} by the artist ${artist}`;
};

const displayError = (error) => {
  const paragraph = document.querySelector('#info-art');
  paragraph.textContent = `We have a problem ${error}`;
};

const getArtwork = (artId) => {
  // returns a promise!
  fetch(`https://api.artic.edu/api/v1/artworks/${artId}`)
    .then((response) => {
      console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error('Artwork not found');
      }
    })
    .then((obj) => {
      displayArtwork(obj);
    })
    .catch((error) => {
      displayError(error);
    });
};

getArtwork(25);
