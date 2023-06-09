import Book from "./modules/book.js";
import navContent from "./modules/nav-content.js";
import dateTime from "./modules/date-time.js";

const bookList = new Book('#book-form', 'bookCollection', '.booklist-table');

navContent();

dateTime();
