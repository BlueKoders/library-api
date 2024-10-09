import Joi from "joi";

export const addBookValidator = Joi.object({
    title:Joi.string().required(),
    summary:Joi.string().required(),
    author:Joi.string().required(),
    cover:Joi.string(),
    content:Joi.string().required()
})