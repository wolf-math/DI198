const express = require('express');
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.js');

router.get('/', getProducts); // /api/products
router.get('/:productID', getProduct); // /api/products/:productID
router.post('/', createProduct);
router.put('/:productID', updateProduct);
router.delete('/:productID', deleteProduct);

module.exports = router;
