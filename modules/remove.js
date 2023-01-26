export default class Remove {
  remove = (id) => {
    console.log(id);
    let allBooks = JSON.parse(localStorage.getItem('book-List'));
    allBooks = allBooks.filter((book) => book.id.toString() !== id.toString());
    localStorage.setItem('book-List', JSON.stringify(allBooks));
  };
}
