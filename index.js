import Library from './modules/booksCollection.js';
import displayDateTime from './modules/dateTime.js';

const newBook = new Library();

const createBook = document.querySelector('#addBook');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const validationMessage = document.querySelector('.message');

const clearValidationMessage = () => {
  validationMessage.innerHTML = '';
  validationMessage.classList.remove('active');
};

createBook.addEventListener('click', (event) => {
  event.preventDefault();
  if (titleInput.value && authorInput.value) {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const title = titleInput.value;
    const author = authorInput.value;
    newBook.collectBooks(title, author);
    validationMessage.innerHTML = 'Your book has been added successfully';
    validationMessage.classList.add('active');
    setTimeout(clearValidationMessage, 3000);
    titleInput.value = '';
    authorInput.value = '';
  } else {
    validationMessage.innerHTML = 'All field should be inserted';
    validationMessage.classList.add('active');
    setTimeout(clearValidationMessage, 3000);
  }
});

newBook.showBooks();

const formButton = document.querySelector('#form');
const booksButton = document.querySelector('#list');
const contactButton = document.querySelector('#contact');
const booksSection = document.querySelector('.display-books');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-section');

function showForm() {
  booksSection.classList.add('hide');
  formSection.classList.remove('hide');
  contactSection.classList.add('hide');
}

function showBooks() {
  booksSection.classList.remove('hide');
  formSection.classList.add('hide');
  contactSection.classList.add('hide');
}

function showContact() {
  booksSection.classList.add('hide');
  contactSection.classList.remove('hide');
  formSection.classList.add('hide');
}

booksButton.addEventListener('click', showBooks);
formButton.addEventListener('click', showForm);
contactButton.addEventListener('click', showContact);

const hamburgerMenu = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const menuItems = document.querySelectorAll('.menu-items li');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  const hamburgerIcon = document.querySelector('#closeButton');
  hamburgerIcon.classList.toggle('bi-list');
  hamburgerIcon.classList.toggle('bi-x');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const hamburgerIcon = document.querySelector('#closeButton');
    hamburgerIcon.classList.add('bi-list');
    hamburgerIcon.classList.remove('bi-x');
    nav.classList.remove('active');
  });
});

const dateTime = document.querySelector('#date-time');
dateTime.innerHTML = displayDateTime;
