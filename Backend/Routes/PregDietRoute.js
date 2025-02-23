import express, { Router } from "express";
import { dietController } from "../controllers/pregDietController.js";

const dietRouter = express.Router()

dietRouter.post('/recommend', dietController )

export default dietRouter