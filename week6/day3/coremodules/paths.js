const path = require('path');

data_folder = '/data/';
products_folder = '/products';
products_file = 'products.json';

const full_path = path.join(data_folder, products_folder, products_file);

const abs_path = path.resolve(__dirname, 'data', 'products', 'products.json');

console.log(full_path);
console.log(abs_path);
// /Users/username/Documents/dev/learn_node/data/products/products.json
