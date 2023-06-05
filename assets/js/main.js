if (localStorage.getItem('Added Books') === null) {
  localStorage.setItem('Added Books', JSON.stringify([]));
}
  
<<<<<<< HEAD
const storeData = JSON.parse(localStorage.getItem('Added Books'));
=======
// Retrieving data from local storage
const storeData = JSON.parse(localStorage.getItem('Added Books'));

function updateData() {
  localStorage.setItem('Added Books', JSON.stringify(storeData));
}
>>>>>>> f367a91 (Update Css, Js to fix Stylelint & ESLint error V1)
  
// Getting values from input fields
const form = document.querySelector('#book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.book-title');
  const authorInput = document.querySelector('.book-author');
  addNewData(titleInput.value, authorInput.value);
  titleInput.value = ''; 
  authorInput.value = ''; 
});
<<<<<<< HEAD

=======
>>>>>>> f367a91 (Update Css, Js to fix Stylelint & ESLint error V1)
  
function createBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    books += `
      <p>${arr[i].title}</p>
      <p>${arr[i].author}</p>
      <button onclick="removeBook(${i})">Remove</button>
      <hr/>
    `;
  }
  return books;
}
<<<<<<< HEAD
  
function displayBooks() {
  const listOfBooks = document.querySelector('.container-section');
  listOfBooks.innerHTML = `
    <ul class="book-ul">
      ${createBooks(storeData)}
    </ul>
  `;
}

// Displaying data in the container
function displayBooks() {
  const listOfBooks = document.querySelector('.container-section');
  listOfBooks.innerHTML = `
    <ul class="book-ul">
      ${createBooks(storeData)}
    </ul>
  `;
}

// Adding new data to local storage
function addNewData(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor
  };
  storeData.push(book);
  updateData();
  displayBooks();
}
  
function addNewData(titleBook, authorBook) {
  const book = {
    title: titleBook,
    author: authorBook
  };
  storeData.push(book);
  updateData();
  displayBooks();
}

=======

// Displaying data in the container
function displayBooks() {
  const listOfBooks = document.querySelector('.container-section');
  listOfBooks.innerHTML = `
    <ul class="book-ul">
      ${createBooks(storeData)}
    </ul>
  `;
}

// Adding new data to local storage
function addNewData(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor
  };
  storeData.push(book);
  updateData();
  displayBooks();
}
  
// Remove a book from local storage
>>>>>>> f367a91 (Update Css, Js to fix Stylelint & ESLint error V1)
function removeBook(i) {
  storeData.splice(i, 1);
  updateData();
  displayBooks();
}

<<<<<<< HEAD
window.onload = displayBooks;
=======
window.onload = displayBooks;
>>>>>>> f367a91 (Update Css, Js to fix Stylelint & ESLint error V1)
