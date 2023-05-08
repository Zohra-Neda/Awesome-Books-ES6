// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
export default class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  collectBooks = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  removeBook = (title, author) => {
    const index = this.books.findIndex((book) => book.title === title && book.author === author);
    if (index !== -1) {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.showBooks();
    }
  }

  showBooks = () => {
    const booksDiv = document.querySelector('#books');
    booksDiv.innerHTML = '';
    if (Array.isArray(this.books)) {
      this.books.forEach((book) => {
        const booksContainer = document.createElement('div');
        booksContainer.classList.add('books-container');
        const list = document.createElement('div');
        list.classList.add('book-item');
        const item1 = document.createElement('p');
        item1.classList.add('book-item-name');
        const item2 = document.createElement('p');
        item2.classList.add('book-item-author');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove');
        item1.innerText = `"${book.title.charAt(0).toUpperCase() + book.title.slice(1)}"`;
        item2.innerText = `by ${book.author.charAt(0).toUpperCase() + book.author.slice(1)}`;
        document.createElement('hr');
        list.appendChild(item1);
        list.appendChild(item2);
        booksContainer.appendChild(list);
        booksContainer.appendChild(removeButton);
        removeButton.addEventListener('click', () => {
          this.removeBook(book.title, book.author);
        });
        booksDiv.appendChild(booksContainer);
      });
    }
  }
}
