import { Router } from "express";



// create a router
const bookRouter = Router();


// Define routes
bookRouter.post('/books', addBook)

bookRouter.get('/books', getBooks);

bookRouter.get('/books/:id', getBook);

bookRouter.patch('/books/:id', updateBook);

bookRouter.delete('/books/:id',  deleteBook);

// Export router
export default bookRouter;