import Joi from "joi";

export const addReviewValidator = Joi.object({
    rating: Joi.number().integer().min(1).max(5),
    comment: Joi.string().required(),
    // book: Joi.string().required() //Commented out to temporary resolve error for ObjectId
})
export const updateReviewValidator = Joi.object({
    rating: Joi.number().integer().min(1).max(5),
    comment: Joi.string(),
    // book: Joi.string() //Commented out to temporary resolve error for ObjectId
})