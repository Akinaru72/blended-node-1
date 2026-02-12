import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (number) => {
  try {
    const arrayDB = await readProducts();
    const newProducts = [];
    for (let i = 0; i < number; i++) {
      newProducts.push(createFakeProduct());
    }
    await writeProducts([...arrayDB, ...newProducts]);
    console.log(`✅ Successfully added ${number} new products.`);
  } catch (err) {
    console.error('❌ Error while generating products', err.message);
  }
};

const number = Number(process.argv[2]) || 1;
generateProducts(number);
