if (localStorage.getItem('Added Books') === null) {
  localStorage.setItem('Added Books', JSON.stringify([]));
}
  
const storeData = JSON.parse(localStorage.getItem('Added Books'));
  
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

function removeBook(i) {
  storeData.splice(i, 1);
  updateData();
  displayBooks();
}

window.onload = displayBooks;
