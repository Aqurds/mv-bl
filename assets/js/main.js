// // Check if there are any books in localStorage, and if not, initialize an empty array
// const bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

// // Function to update the data in localStorage
// function updateData() {
//   localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
// }

// // Function to display books in the page
// // function displayBooks() {
// //   const bookList = document.querySelector('.container-section');
// //   bookList.innerHTML = '';

// //   bookCollection.forEach((book, index) => {
// //     const bookItem = document.createElement('div');
// //     bookItem.classList.add('book-item');

// //     const titlePara = document.createElement('p');
// //     titlePara.textContent = `Title: ${book.title}`;

// //     const authorPara = document.createElement('p');
// //     authorPara.textContent = `Author: ${book.author}`;

// //     const removeButton = document.createElement('button');
// //     removeButton.textContent = 'Remove';
// //     removeButton.addEventListener('click', () => {
// //       removeBook(index);
// //     });

// //     bookItem.appendChild(titlePara);
// //     bookItem.appendChild(authorPara);
// //     bookItem.appendChild(removeButton);
// //     bookList.appendChild(bookItem);
// //   });
// // }

// function displayBooks() {
//   const bookList = document.querySelector('.booklist-table');
//   bookList.innerHTML = '';

//   bookCollection.forEach((book, index) => {
//     const bookItem = document.createElement('tr');
//     bookItem.classList.add('book-item');

//     const titlePara = document.createElement('td');
//     titlePara.textContent = `"${book.title}" by ${book.author}`;

//     const removeTd = document.createElement('td');
//     const removeButton = document.createElement('button');
//     removeButton.classList.add('btn');
//     removeButton.classList.add('btn-light');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => {
//       removeBook(index);
//     });

//     removeTd.appendChild(removeButton);
//     bookItem.appendChild(titlePara);
//     bookItem.appendChild(removeTd);
//     bookList.appendChild(bookItem);
//   });
// }

// // Function to remove a book from the collection
// function removeBook(index) {
//   bookCollection.splice(index, 1);
//   updateData();
//   displayBooks();
// }

// // Function to add a new book to the collection
// function addBook(title, author) {
//   const book = {
//     title,
//     author,
//   };
//   bookCollection.push(book);
//   updateData();
//   displayBooks();
// }

// // Add event listener to the form
// const form = document.querySelector('#book-form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const titleInput = document.querySelector('.book-title');
//   const authorInput = document.querySelector('.book-author');
//   addBook(titleInput.value, authorInput.value);
//   titleInput.value = '';
//   authorInput.value = '';
// });

// // Display the existing books on page load
// document.addEventListener('DOMContentLoaded', () => {
//   displayBooks();
// });

class Book {
  constructor(formElem, bookCollectionName, elemToInsertData) {
    this.bookCollectionName = bookCollectionName;
    this.elemToInsertData = elemToInsertData;
    this.formElem = document.querySelector(formElem);
    this.bookCollection = JSON.parse(localStorage.getItem(this.bookCollectionName)) || [];
    this.addEventHandler();
    this.displayBooks();
  }

  updateData() {
    localStorage.setItem(this.bookCollectionName, JSON.stringify(this.bookCollection));
  }

  addBook(title, author) {
    if (!title || !author) {
      alert('Please, insert title & author!');
      return;
    }
    this.bookCollection.push({ title, author });
    this.updateData();
    this.displayBooks();
  }

  removeBook(index) {
    this.bookCollection.splice(index, 1);
    this.updateData();
    this.displayBooks();
  }

  generateHtmlForBookList() {
    let boilerPlate = '';
    this.bookCollection.forEach((book, index) => {
      boilerPlate += `<tr class="book-item">
        <td>"${book.title}" by ${book.author}</td>
        <td>
          <button class="btn btn-light" data-index=${index}>
            Remove
          </button>
        </td>
      </tr>`
    });
    return boilerPlate;
  }

  activateRemoveButton() {
    const table = document.querySelector('.booklist-table');
    const btn = table.querySelectorAll('button');
    btn.forEach((btnR, index) => {
      btnR.addEventListener('click', () => {
        this.removeBook(index);
      });
    });
  }

  displayBooks() {
    const bookList = document.querySelector(this.elemToInsertData);
    bookList.innerHTML = '';
    bookList.innerHTML = this.generateHtmlForBookList();
    this.activateRemoveButton();
  }

  addEventHandler() {
    this.formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.querySelector('.book-title');
      const authorInput = document.querySelector('.book-author');
      this.addBook(titleInput.value, authorInput.value);
      titleInput.value = '';
      authorInput.value = '';
    });
  }
}

const bookList = new Book('#book-form', 'bookCollection', '.booklist-table');
