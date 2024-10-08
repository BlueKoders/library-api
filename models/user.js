import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    passWord: {type: String},
   country: {type: String}
});

export const userModel = model('Review', userSchema);