// External import
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
//internal import
import userRouter from './routes/user.js';

//connect mongodb 
await mongoose.connect(process.env.MONGO_URI);

// var app = express module
const app = express();

//Add middlewares
app.use(express.json()) //yet to be used
app.use(cors());

//use routes
app.use(userRouter);

//App listening
const PORT = 3500
app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`);
})