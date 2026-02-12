import { readProducts } from '../utils/readProducts.js';

const getTotalPrice = async () => {
  try {
    const arrayDB = await readProducts();
    const total = arrayDB.reduce((acc, product) => {
      return acc + Number(product.price);
    }, 0);
    console.log(`✅ Total price: ${total}`);
  } catch (err) {
    console.error('❌ Error while calculate total price', err.message);
  }
};
getTotalPrice();
