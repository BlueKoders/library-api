import { Router } from "express";

//use router module
const authorRouter = Router();

authorRouter.post("/author", addAuthor);
authorRouter.get("/author", allAuthor);
authorRouter.get("/author/:id", anAuthor);
authorRouter.update("/author/:id", updateAuthor);
authorRouter.delete("/author/:id", deleteAuthor);

export default authorRouter;
