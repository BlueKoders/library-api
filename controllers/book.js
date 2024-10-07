export const addBook = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(201).json("Book Added successfully!");
    } catch (error) {
        next(error);
    }
}

export const getBooks = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(200).json("Books Retrived!");
    } catch (error) {
        next(error);
    }
}

export const getBook = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(200).json("Book Retrived!");
    } catch (error) {
        next(error);
    }
}

export const updateBook = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(200).json("Book retrived!");
    } catch (error) {
        next(error);
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        //Validate user input
        //write todo to database
        //Respond to request
        res.status(200).json("Book retrived!");
    } catch (error) {
        next(error);
    }
}


