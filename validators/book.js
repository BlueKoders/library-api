import Joi from "joi";

export const addBookValidator = Joi.object({
    title:Joi.string().required().min(2).max(200),
    summary:Joi.string().required().min(20).max(1000),
    author:Joi.string().required(),
    publisher:Joi.string().required(),
    publishDate: Joi.string(),
    numberOfPages: Joi.number().integer().greater(1),
    cover: Joi.string().required(),
    content:Joi.string().required()
})

export const updateBookValidator = Joi.object({
    title:Joi.string().min(5).max(200),
    summary:Joi.string().min(20).max(1000),
    author:Joi.string(),
    publisher:Joi.string(),
    publishDate: Joi.date(),
    numberOfPages: Joi.number().integer().greater(1),
    cover: Joi.string(),
    content:Joi.string()
})
