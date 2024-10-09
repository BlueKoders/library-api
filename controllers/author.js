import { AuthorModel } from "../models/author.js";

export const addAuthor = async (req, res, next) => {
    try {
        //Validate user input
        // Fetch author from database
        const author = await AuthorModel.find();
        //Respond to request
        res.status(201).json("Author Added successfully!");
    } catch (error) {
        next(error);
    }
}


export const getAuthors = async (req, res, next) => {
    try {
        // Fetch author from database
        const authors = await AuthorModel.find();
        // Return response
        res.status(200).json(authors);
    } catch (error) {
        next(error)

    }
}
export const getAuthor = async (req, res, next) => {
    try {
        // Fetch author from database
        const author = await AuthorModel.find();
        // Return response
        res.status(200).json(author);
    } catch (error) {
        next(error)

    }
}

export const updateAuthor = async (req, res, next) => {
    try {
        // Extract author ID from request parameters
        const { id } = req.params;
        // Extract the updated data from the request body
        const updatedData = req.body;
        // Find the author by ID and update it with the new data
        const updatedAuthor = await AuthorModel.findByIdAndUpdate(id, updatedData, { new: true });
        // Send the updated author as a response
        res.status(200).json(updateAuthor);
    } catch (error) {
        next(error);
    }
};


export const deleteAuthor = async (req, res, next) => {
    try {
        // Extract author ID from request parameters
        const { id } = req.params;
        // Find and delete the author by ID
        const deleteAuthor = await ReviewModel.findByIdAndDelete(id);
        // Send success response
        res.status(200).json({ message: "Author deleted successfully" });
    } catch (error) {
        next(error);
    }
};
