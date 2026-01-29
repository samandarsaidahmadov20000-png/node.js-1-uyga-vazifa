import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, 'logs.txt');

function timestamp() {
  return new Date().toISOString().replace('Z', '');
}

export function log(message) {
  try {
    fs.appendFileSync(logFilePath, `${timestamp()} ${message}\n`);
  } catch (err) {
    console.error('Log yozishda xatolik:', err.message);
  }
}

export function readLogs() {
  try {
    return fs.readFileSync(logFilePath, 'utf8');
  } catch (err) {
    console.error('Log fayli topilmadi yoki o‘qilmadi:', err.message);
    return 'LOG FAYLI MAVJUD EMAS';
  }
}
