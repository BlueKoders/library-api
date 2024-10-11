import Joi from "joi";

export const addAuthorValidator = Joi.object({
   name:Joi.string().required(),
    bio:Joi.string().required().min(10).max(500),
})
export const updateAuthorValidator = Joi.object({
   name:Joi.string(),
    bio:Joi.string().min(10).max(500),
}) 