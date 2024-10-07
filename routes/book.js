import { Router } from "express";
import { addBook, getBook, getBooks, updateBook, deleteBook } from "../controllers/book.js";


// create a router
const bookRouter = Router();


// Define routes
<<<<<<< HEAD
bookRouter.post('/books', addBook);

=======
bookRouter.post('/books', addBook)
>>>>>>> a0b040f79d10578ef523b2cf98120a167cf8132e
bookRouter.get('/books', getBooks);
bookRouter.get('/books/:id', getBook);
bookRouter.patch('/books/:id', updateBook);
bookRouter.delete('/books/:id',  deleteBook);

// Export router
export default bookRouter;