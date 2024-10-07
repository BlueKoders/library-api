import { Router } from "express";
import { addBook, getBook, getBooks, updateBook, deleteBook } from "../controllers/book.js";


// create a router
const bookRouter = Router();


// Define routes
bookRouter.post('/books', addBook);
bookRouter.get('/books', getBooks);
bookRouter.get('/books/:id', getBook);
bookRouter.patch('/books/:id', updateBook);
bookRouter.delete('/books/:id',  deleteBook);

// Export router
export default bookRouter;