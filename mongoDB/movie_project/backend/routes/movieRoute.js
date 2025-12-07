import expres from "express";
import { addMovie, getMovies } from "../controllers/movieController.js";

const router = expres.Router();

router.get("/", getMovies);
router.post("/post", addMovie);

export default router;
