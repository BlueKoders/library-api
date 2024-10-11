//User validation import
import { addUserValidator, updateUserValidator } from "../validators/user.js";

//Register 
 export const register = (req, res, next) => {
try {
    //User =Validation
    const {error} = addUserValidator.validate(req.body);
    if (error){
        return res.status(422).res.json
    }
        //Response to register request
        res.status(201).json("Thanks for registering! We've reserved your space!")
} catch (error) {
    next(error);
}
 }

 export const login = (req, res, next) => {
try {
        //Respondse to register request
        res.status(201).json("login successful!")
} catch (error) {
    next(error);
}
 }

 export const logout = (req, res, next) => {
try {
    //Respondse to register request
        res.status(201).json("Logout successful, see you soon!")
} catch (error) {
    next(error);
}
 }