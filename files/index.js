import fs from "fs/promises";
import { get } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const booksPath = path.join(__dirname, "books.json");
console.log(booksPath);

const getAll = async () => {
  const books = await fs.readFile(booksPath, "utf-8");
  return JSON.parse(books);
};

export { getAll };
