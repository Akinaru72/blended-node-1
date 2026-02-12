import { readProducts } from './utils/readProducts.js';

const test = async () => {
  await readProducts();
};

// import { writeProducts } from './utils/writeProducts.js';

// const testProducts = [
//   {
//     name: 'Incredible Steel Keyboard',
//     price: '79.99',
//     category: 'Electronics',
//     description:
//       'The automobile layout consists of a front-engine design, with advanced engineering to ensure maximum performance and reliability for everyday use.',
//   },
//   {
//     name: 'Handcrafted Wooden Chair',
//     price: '149.50',
//     category: 'Home',
//     description:
//       'A beautifully designed wooden chair made from high quality materials, perfect for modern interiors and long-term everyday comfort.',
//   },
// ];
// const test = async () => {
//   await writeProducts(testProducts);
// };

test();
