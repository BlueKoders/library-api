import { ReviewModel } from "../models/review.js";
import { addReviewValidator } from "../validators/review.js";
import { updateReviewValidator } from "../validators/review.js";

export const addReview = async (req, res, next) => {
    try {
        //  Validate user inputs
        const {error, value} = addReviewValidator.validate(req.body);
        if (error) {
             return res.status(422).res.json(error)
        }
        //  Write review to database
        const postReviewRes = await ReviewModel.create(value);
        //  Respond to request
        res.status(201).json(`You rated the book ${postReviewRes.rating} stars`);
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
        // Extract review ID from request parameters
        const { id } = req.params;
        // Extract the updated data from the request body
        const updatedData = req.body;
        // Find the review by ID and update it with the new data
        const updatedReview = await ReviewModel.findByIdAndUpdate(id, updatedData, { new: true });
      
        // Send the updated review as a response
        res.status(200).json(updatedReview);
    } catch (error) {
        next(error);
    }
};



export const deleteReview = async (req, res, next) => {
    try {
        // Extract review ID from request parameters
        const { id } = req.params;
        // Find and delete the review by ID
        const deletedReview = await ReviewModel.findByIdAndDelete(id);
        // Send success response
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        next(error);
    }
};
