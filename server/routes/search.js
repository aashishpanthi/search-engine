import express from "express";
import { getSites } from "../controllers/search.js";

const router = express.Router();

router.route("/:query").get(getSites); //Route for getting all matching Sites

export default router;
