import { DateTime } from "./modules/luxon.js";
import Add from "./modules/add.js";
import Remove from "./modules/remove.js";
const add = new Add();
const remove = new Remove();
// Add current time
const now = DateTime.now();
document.querySelector(
  ".date-now"
).innerHTML = `${now.day} ${now.month}, ${now.year} ${now.hour}:${now.minute}:${now.second}`;

// eslint-disable-next-line no-undef
const list = document.getElementById("list");
const addBook = document.getElementById("add-book");
const contact = document.getElementById("contact-page");
const booksContainer = document.createElement("ul");
booksContainer.classList = "book-list";
const heading = document.querySelector("h1");
const mainContainer = document.querySelector("main");

let allBooks = [];
if (localStorage.getItem("bookList") === null) {
  localStorage.setItem("bookList", []);
}
if (localStorage.getItem("id") === null) {
  localStorage.setItem("id", JSON.stringify(0));
}

// boik list
const domDisplay = () => {
  heading.innerHTML = "All Awesome Books";
  booksContainer.innerHTML = "";
  mainContainer.innerHTML = "";
  allBooks = JSON.parse(localStorage.getItem("bookList"));

  allBooks.forEach((book) => {
    const bookTitle = book.name;
    const bookAuthor = book.author;
    const bookId = book.id;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", (e) => {
      const { id } = e.target.parentNode;
      remove.remove(id);
    });

    const newBook = document.createElement("li");
    const newTitle = document.createElement("p");

    newTitle.innerHTML = `"${bookTitle}" by ${bookAuthor}`;
    newBook.id = bookId;
    newBook.appendChild(newTitle);
    newBook.appendChild(removeBtn);
    booksContainer.appendChild(newBook);
    booksContainer.id = "book-Container";
    mainContainer.appendChild(booksContainer);
  });
};

list.addEventListener("click", () => {
  domDisplay();
});

// Add form page
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  heading.innerHTML = "Add a New Book";
  mainContainer.innerHTML = "";
  const form = document.createElement("form");
  form.classList += "book-form";
  //   titleInput
  const titleInput = document.createElement("input");
  titleInput.classList += "form-control";
  titleInput.type = "text";
  titleInput.name = "bookname";
  titleInput.id = "title";
  titleInput.placeholder = "Title";
  form.appendChild(titleInput);
  //   authorInput
  const authorInput = document.createElement("input");
  authorInput.classList += "form-control";
  authorInput.type = "text";
  authorInput.name = "authorname";
  authorInput.id = "author";
  authorInput.placeholder = "Author";
  form.appendChild(authorInput);
  //   addInput
  const addBtn = document.createElement("button");
  addBtn.classList += "add-Btn";
  addBtn.type = "button";
  addBtn.innerText = "Add";
  addBtn.id = "btn";
  form.appendChild(addBtn);
  allBooks = JSON.parse(localStorage.getItem("bookList"));

  mainContainer.appendChild(form);

  addBtn.addEventListener("click", () => {
    add.add(titleInput.value, authorInput.value);
    titleInput.value = "";
    authorInput.value = "";
  });
});

// creat contact page
contact.addEventListener("click", (e) => {
  e.preventDefault();
  heading.innerHTML = "Contact Information";
  mainContainer.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.classList += "contact-list";
  paragraph.innerHTML = "For more information please contact us on:";
  const email = document.createElement("p");
  email.innerHTML = "Email : yemsrach3723@gmail.com";
  const phoneNumber = document.createElement("p");
  phoneNumber.innerHTML = "phone-Number : +2516280543";
  const wellcome = document.createElement("p");
  wellcome.innerHTML = "Wellcome to my address and Thank you";

  const contactlist = document.createElement("ul");
  contactlist.classList += "contact-list";

  mainContainer.appendChild(paragraph);
  contactlist.appendChild(email);
  contactlist.appendChild(phoneNumber);
  contactlist.appendChild(wellcome);
  mainContainer.appendChild(contactlist);
});
