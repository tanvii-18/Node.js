import expres from "express";
import { getMovieById, getMovies } from "../controllers/getMovieController.js";
import { addMovie } from "../controllers/addMovieController.js";
import { updateMovie } from "../controllers/updateMovieController.js";

const router = expres.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/post", addMovie);
router.put("/update/:id", updateMovie);

export default router;
