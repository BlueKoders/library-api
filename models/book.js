// import { required } from "joi";
import { Schema, model, Types } from "mongoose";


const bookSchema = new Schema({
    title: {type: String, required: true},
    summary: {type: String},
    author: { type: String, required: true},
    // author: {type: Types.ObjectId, ref: 'Author'},
    publisher: {type: String},
    publishDate: {type: Date},
    numberOfPages: {type: Number},
    cover: {type: String, required: false},
    content: {type: String, required:true},
});
 
export const BookModel = model('Book', bookSchema);