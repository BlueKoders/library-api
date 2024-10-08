export const addAuthor = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        // Fetch review from database
        const books = await BookModel.find();
        //Respond to request
        res.status(201).json("Author Added successfully!");
    } catch (error) {
        next(error);
    }
}

export const allAuthor = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(201).json("Authors retrieved successfully!");
    } catch (error) {
        next(error);
    }
}

export const anAuthor = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(201).json("Author retrieved successfully!");
    } catch (error) {
        next(error);
    }
}

export const updateAuthor = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(201).json("Author updated successfully!");
    } catch (error) {
        next(error);
    }
}

export const deleteAuthor = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(201).json("Author deleted successfully!");
    } catch (error) {
        next(error);
    }
}