import * as fs from 'fs';
import * as path from 'path';

export function readJsonData(filePath: string): any {
  try {
    filePath = path.join(__dirname, filePath)
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading the JSON file: ${filePath}`, error);
    throw error;
  }
}