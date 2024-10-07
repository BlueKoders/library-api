import { ReviewModel } from "../models/review.js";

export const addReview = async (req, res, next) => {
    try {
        //  Validate user inputs
        //  Write review to database
        await ReviewModel.create(req.body);
        //  Respond to request
        res.status(201).json('Review was added!');
    } catch (error) {
        next(error)

    }
}

export const allReview = async (req, res, next) => {
    try {
        // Fetch review from database
        const reviews = await ReviewModel.find();
        // Return response
        res.status(200).json(reviews);
    } catch (error) {
        next(error)

    }
}



export const getReview = async (req, res, next) => {
    try {
        // Fetch review from database
        const review = await ReviewModel.find();
        // Return response
        res.status(200).json(review);
    } catch (error) {
        next(error)

    }
}



export const updateReview = async (req, res, next) => {
    try {
        //  Validate user inputs
        //  Write review to database
        await ReviewModel.create(req.body);
        //  Respond to request
        res.status(201).json('Review was updated!');
    } catch (error) {
        next(error)

    }
}



export const deleteReview = async (req, res, next) => {
    try {
        // Extract review ID from request parameters
        const { id } = req.params;

        // Find and delete the review by ID
        const deletedReview = await ReviewModel.findByIdAndDelete(id);

        // If no review is found, send a 404 response
        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        // Send success response
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        next(error);
    }
};
