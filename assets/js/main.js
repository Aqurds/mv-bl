class Book {
  constructor(formElem, bookCollectionName, elemToInsertData) {
    this.bookCollectionName = bookCollectionName;
    this.elemToInsertData = elemToInsertData;
    this.formElem = document.querySelector(formElem);
    this.bookCollection = JSON.parse(localStorage.getItem(this.bookCollectionName)) || [];
    this.addFormEventHandler();
    this.displayBooks();
  }

  updateDataLocalStorage() {
    // This method will update data in localStorage
    localStorage.setItem(this.bookCollectionName, JSON.stringify(this.bookCollection));
  }

  addBookToList(title, author) {
    if (!title || !author) {
      alert('Please, insert title & author!');
      return;
    }
    this.bookCollection.push({ title, author });
    this.updateDataLocalStorage();
    this.displayBooks();
  }

  removeBookFromList(index) {
    this.bookCollection.splice(index, 1);
    this.updateDataLocalStorage();
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
      </tr>`;
    });
    return boilerPlate;
  }

  activateRemoveButton() {
    const table = document.querySelector('.booklist-table');
    const btn = table.querySelectorAll('button');
    btn.forEach((btnR, index) => {
      btnR.addEventListener('click', () => {
        this.removeBookFromList(index);
      });
    });
  }

  displayBooks() {
    const bookList = document.querySelector(this.elemToInsertData);
    bookList.innerHTML = '';
    bookList.innerHTML = this.generateHtmlForBookList();
    this.activateRemoveButton();
    const titleInput = document.querySelector('.book-title').value = '';
    const authorInput = document.querySelector('.book-author').value = '';
  }

  addFormEventHandler() {
    this.formElem.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.querySelector('.book-title');
      const authorInput = document.querySelector('.book-author');
      this.addBookToList(titleInput.value, authorInput.value);
      titleInput.value = '' || titleInput.value;
      authorInput.value = '' || authorInput.value;
    });
  }
}

const bookList = new Book('#book-form', 'bookCollection', '.booklist-table');
