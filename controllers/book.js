import { BookModel } from "../models/book.js";
import { addBookValidator } from "../validators/book.js";
import { updateBookValidator } from "../validators/book.js";

export const addBook = async (req, res, next) => {
    try {
        //Validate user input
         const {error, value} = addBookValidator.validate(req.body);
         if (error) {
            return res.status(422).json(error);
         }
        //Add books to database
        const postBookRes = await BookModel.create(value);
        //Respond to request
        res.status(201).json(`You have added '${postBookRes.title}' to your library`);
    } catch (error) {
        next(error);
    }
}

export const getBooks = async (req, res, next) => {
    try {
        // Fetch books from database
        const books = await BookModel.find().populate('author');
        // Return response
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}

export const getBook = async (req, res, next) => {
    try {
        // Fetch book from database
        const book = await BookModel.find().populate('author');
        // Return response
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
}


export const updateBook = async (req, res, next) => {
    try {
        //Validate user input
         const {error, value} = updateBookValidator.validate(req.body);
         if (error) {
            return res.status(422).json(error);
         }
        //Update book in database
        const updateBookRes = await BookModel.updateOne(value);
        //Respond to request
        res.status(200).json(`You have Successfully Updated: '${value.title}'`);
    } catch (error) {
        next(error);
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        // Extract book ID from request parameters
        const { id } = req.params;
        // Find and delete the book by ID
        const deletedBook = await BookModel.deleteOne( );
        // Send success response
        res.status(200).json(`You have deleted: ${req.body.title}`);
    } catch (error) {
        next(error);
    }
};