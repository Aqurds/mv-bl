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
      </tr>`;
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
