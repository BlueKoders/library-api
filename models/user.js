import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String},
    passWord: {type:}
});


export const userModel = model('Review', userSchema);