import Book from "./book.js";

let allBooks;
export default class Add {
  add = (bookTitle, bookAuthor) => {
    if (!(bookTitle.length < 3 || bookAuthor.length < 3)) {
      let id = JSON.parse(localStorage.getItem("id"));
      id += 1;
      localStorage.setItem("id", JSON.stringify(id));
      const newBook = new Book(id, bookTitle, bookAuthor);
      if (localStorage.getItem("bookList").length !== 0) {
        allBooks = JSON.parse(localStorage.getItem("bookList"));
      } else {
        allBooks = [];
      }
      allBooks.unshift(newBook);
      localStorage.setItem("bookList", JSON.stringify(allBooks));
    }
  };
}
