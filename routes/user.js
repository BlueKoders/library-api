//Import router from express module
import { Router } from "express";
//Import user controllers
import {register, login, logout } from "../controllers/user.js";

//create a user router from Router module
const userRouter = Router();

//Define routes
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);

//export the router userRouter
export default userRouter;
