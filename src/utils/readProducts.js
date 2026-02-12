import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log('✅ Products read successfully.');
    return data.length > 0 ? JSON.parse(data) : [];
  } catch (err) {
    console.error('❌ Failed to read products', err.message);
  }
};
