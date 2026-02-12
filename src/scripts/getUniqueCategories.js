import { readProducts } from '../utils/readProducts.js';

const getUniqueCategories = async () => {
  try {
    const arrayDB = await readProducts();
    const categoriesDB = [];
    for (let i = 0; i < arrayDB.length; i++) {
      if (!categoriesDB.includes(arrayDB[i].category)) {
        categoriesDB.push(arrayDB[i].category);
      }
    }
    console.log('✅ Success get array of unique categories', categoriesDB);
  } catch (err) {
    console.error('❌ Error while get unique categories', err.message);
  }
};

getUniqueCategories();
