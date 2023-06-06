// Check if there are any books in localStorage, and if not, initialize an empty array
const bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

// Function to update the data in localStorage
function updateData() {
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

// Function to display books in the page
function displayBooks() {
  const bookList = document.querySelector('.container-section');
  bookList.innerHTML = '';

  bookCollection.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');

    const titlePara = document.createElement('p');
    titlePara.textContent = `Title: ${book.title}`;

    const authorPara = document.createElement('p');
    authorPara.textContent = `Author: ${book.author}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    bookItem.appendChild(titlePara);
    bookItem.appendChild(authorPara);
    bookItem.appendChild(removeButton);
    bookList.appendChild(bookItem);
  });
}

// Function to remove a book from the collection
function removeBook(index) {
  bookCollection.splice(index, 1);
  updateData();
  displayBooks();
}

// Function to add a new book to the collection
function addBook(title, author) {
  const book = {
    title,
    author
  };
  bookCollection.push(book);
  updateData();
  displayBooks();
}

// Function to update the data in localStorage
function updateData() {
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}

// Add event listener to the form
const form = document.querySelector('#book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.book-title');
  const authorInput = document.querySelector('.book-author');
  addBook(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
});

// Display the existing books on page load
document.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});
