import expres from "express";
import {
  //   addMovie,
  getMovieById,
  getMovies,
} from "../controllers/getMovieController.js";

const router = expres.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
// router.post("/post", addMovie);

export default router;
