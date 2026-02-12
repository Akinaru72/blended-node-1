import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (price) => {
  try {
    const arrayDB = await readProducts();
    const filterDB = arrayDB.filter(
      (product) => Number(product.price) >= price,
    );
    if (filterDB.length === 0) {
      console.log(`❌ Not found any products with min price ${price}`);
      return;
    }
    console.log(`✅ Success read products with min price ${price}`, filterDB);
  } catch (err) {
    console.error(
      '❌ Error while generating products with min price',
      err.message,
    );
  }
};

const arg = Number(process.argv[2]);
const price = Number.isNaN(arg) ? 400 : arg;

getProductsByMinPrice(price);
