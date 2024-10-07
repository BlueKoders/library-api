import { Schema, model, Types } from "mongoose";

const bookSchema = new Schema({
    title: {type: String, require: true},
    summary: {type: String, required: true},
    author: {type: Types.ObjectId, ref: 'Author'},
    cover: {type: String, required: true},
    content: {type: String, required:true}
});

export const BookModel = model('Book', bookSchema);