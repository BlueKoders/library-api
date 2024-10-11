import Joi from "joi";

export const addUserValidator = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email().alphanum(),
    passWord: Joi.string().alphanum().min(5).max(10).required(),
    country: Joi.string().alphanum()
})

export const updateUserValidator = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email().alphanum(),
    passWord: Joi.string().alphanum().min(5).max(10).required(),
    country: Joi.string().alphanum()
})