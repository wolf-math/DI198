function home(req, res) {
  res.send('<h1>HOMEPAGE</h1>');
}

function about(req, res) {
  res.send('<h1>ABOUT</h1>');
}

function contact(req, res) {
  res.send('<h1>CONTACT</h1>');
}

module.exports = { home, about, contact };
