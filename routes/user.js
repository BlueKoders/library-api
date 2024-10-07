//Import router from express module
import { Router } from "express";
//Import user controllers
import {register, login, logout } from "../controllers/user.js";

//create a user router from Router module
const userRouter = Router();

//Define routes
userRouter.post("/user/register", register);
userRouter.get("/user/login", login);
userRouter.post("/user/logout", logout);

//export the router userRouter
export default userRouter;
