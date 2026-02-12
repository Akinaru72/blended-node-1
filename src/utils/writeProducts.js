import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (updatedProducts) => {
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedProducts, null, 2),
      'utf8',
    );

    console.log('✅ Products saved successfully.');
  } catch (err) {
    console.error('❌ Failed to write products', err.message);
  }
};
