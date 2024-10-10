import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: {type: String},
});


export const ReviewModel = model('Review', reviewSchema  )