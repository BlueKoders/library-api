import { BookModel } from "../models/book.js";
import { addBookValidator } from "../validators/book.js";

export const addBook = async (req, res, next) => {
    try {
        //Validate user input
        
        //Add books to database
        //Respond to request
        res.status(201).json("Book Added successfully!");
    } catch (error) {
        next(error);
    }
}

export const getBooks = async (req, res, next) => {
    try {
        // Fetch books from database
        const books = await BookModel.find();
        // Return response
        res.status(200).json("Books successfully retrived");
    } catch (error) {
        next(error);
    }
}

export const getBook = async (req, res, next) => {
    try {
        // Fetch book from database
        const book = await BookModel.find();
        // Return response
        res.status(200).json("Book retrieved successfully");
    } catch (error) {
        next(error);
    }
}


export const updateBook = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(200).json("Book Info Updated!");
    } catch (error) {
        next(error);
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        // Extract review ID from request parameters
        const { id } = req.params;
        // Find and delete the book by ID
        const deletedBook = await ReviewModel.findByIdAndDelete(id);
        // Send success response
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        next(error);
    }
};


