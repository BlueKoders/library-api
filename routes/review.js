import { Router } from "express";
import { addReview, allReview, getReview, updateReview, deleteReview} from "../controllers/review.js";



// create a router
const reviewRouter = Router();


// Define routes
reviewRouter.post('/reviews', addReview);
reviewRouter.get('/reviews', allReview);
reviewRouter.get('/reviews/:id', getReview);
reviewRouter.update('/reviews/:id', updateReview);
reviewRouter.delete('/reviews/:id', deleteReview);


// export routes
export default reviewRouter;