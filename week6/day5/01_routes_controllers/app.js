const express = require('express');
const app = express();
const products_routes = require('./routes/products.js');
const website_routes = require('./routes/website.js');

app.listen(5001, () => {
  console.log('listening on port 5001');
});

app.use(express.json());

app.use('/website', website_routes);
app.use('/api/products', products_routes);
