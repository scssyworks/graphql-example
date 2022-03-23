const DataLoader = require("dataloader");
const { books } = require("./data");

const batchGetBooksById = async (authorIds) => {
  console.log("FETCH: Books for given author");
  const authorBooks = authorIds.map((authorId) => {
    return books.filter((book) => book.author === authorId);
  });
  return authorBooks;
};

const bookLoader = new DataLoader(batchGetBooksById);

module.exports = bookLoader;
