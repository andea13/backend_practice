import fs from "fs/promises";
import { getAll } from "./files/index.js";

const readFile = async () => {
  const content = await fs.readFile("./files/file.txt", "utf-8");
  console.log(content);

  //alternatively
  //  const buffer = await fs.readFile("./files/file.txt");
  //  console.log(buffer);
  //  const content = buffer.toString();
  //  console.log(content);
};

readFile();

const addText = async () => {
  await fs.appendFile("./files/file.txt", "\n Might get one of those flights");
  readFile();
};

const replaceText = async () => {
  try {
    await fs.writeFile("./files/file.txt", "I am going to India");
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

const main = async () => {
  await addText();
  await replaceText();
};

main();

//! READING BOOKS FROM JSON FILE
const books = "./files/books.json";
console.log(books);

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await getAll();
      return console.log(allBooks);
  }
};

invokeAction({ action: "read" });
