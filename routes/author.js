import { Router } from "express";
import { addAuthor, getAuthor, updateAuthor, deleteAuthor, getAuthors} from "../controllers/author.js";


//use router module
const authorRouter = Router();

authorRouter.post("/authors",addAuthor);
authorRouter.get("/authors", getAuthors);
authorRouter.get("/authors/:id", getAuthor);
authorRouter.patch("/authors/:id", updateAuthor);
authorRouter.delete("/authors/:id", deleteAuthor);

export default authorRouter;
