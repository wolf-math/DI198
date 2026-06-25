const express = require('express');
const app = express();

// middleware for '/about'
app.use('/about', (req, res, next) => {
  const now = new Date();
  const formattedNow = now.toLocaleString();
  console.log(formattedNow);
  next();
});

app.get('/home', (req, res) => {
  console.log('-----In the Home Page-----');
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  console.log('-----In the About Page-----');
  res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
