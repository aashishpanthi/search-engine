import express from "express";
import { getImages } from "../controllers/image.js";

const router = express.Router();

router.route("/:query").get(getImages); //Route for getting all matching images

export default router;
