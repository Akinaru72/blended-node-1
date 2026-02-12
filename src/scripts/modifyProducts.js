import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const modifyProducts = async () => {
  try {
    const arrayDB = await readProducts();
    const arrayDBwithoutDescription = arrayDB.map((product) => ({
      name: product.name,
      price: product.price,
      category: product.category,
    }));
    await writeProducts(arrayDBwithoutDescription);
    console.log('✅ Success modify array', arrayDBwithoutDescription);
  } catch (err) {
    console.error('❌ Error while modify products', err.message);
  }
};
modifyProducts();
