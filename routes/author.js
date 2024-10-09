import { Router } from "express";
import { addAuthor, getAuthor, updateAuthor, deleteAuthor, getAuthors} from "../controllers/author.js";


//use router module
const authorRouter = Router();

authorRouter.post("/author",addAuthor);
authorRouter.get("/author", getAuthors);
authorRouter.get("/author/:id", getAuthor);
authorRouter.update("/author/:id", updateAuthor);
authorRouter.delete("/author/:id", deleteAuthor);

export default authorRouter;
