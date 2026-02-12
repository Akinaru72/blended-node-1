import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  try {
    const arrayDB = await readProducts();
    const objectCategories = {};
    for (let i = 0; i < arrayDB.length; i++) {
      let key = arrayDB[i].category;
      if (!objectCategories[key]) {
        objectCategories[key] = [];
      }
      if (!objectCategories[key].includes(arrayDB[i].name)) {
        objectCategories[key].push(arrayDB[i].name);
      }
    }
    console.log('✅ Success create object', objectCategories);
  } catch (err) {
    console.error('❌ Error while get products by categories', err.message);
  }
};

groupProductsByCategories();
