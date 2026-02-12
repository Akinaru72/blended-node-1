import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const createProductsFiles = async () => {
  try {
    const arrayDB = await readProducts();
    for (let i = 0; i < arrayDB.length; i++) {
      let fileName = arrayDB[i].name.replaceAll(' ', '-').trim();
      await fs.writeFile(
        path.join(PATH_FILES_DIR, `${fileName}.json`),
        JSON.stringify(arrayDB[i], null, 2),
        'utf8',
      );
    }
    console.log(`✅ Successfully create files.`);
  } catch (err) {
    console.error('❌ Error while create files', err.message);
  }
};
createProductsFiles();
