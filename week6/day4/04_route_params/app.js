const express = require('express');
const app = express();
const products = require('./data.js');

// app.get('/tutorial/:notion', (req, res) => {
//   console.log('req.params: ', req.params);
//   res.send(`Tutorial about ${req.params.notion}!`);
// });

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:productID', (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.json(product);
});

app.get('/api/query', (req, res) => {
  const search = req.query.search.toLowerCase();
  const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  if (products_result.length < 1) {
    return res.status(200).send('No products matched your search');
  }
  res.json(products_result);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
