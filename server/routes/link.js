import express from "express";
import { addLink } from "../controllers/link.js";

const router = express.Router();

router.route("/").post(addLink); // Route for adding Site

export default router;
