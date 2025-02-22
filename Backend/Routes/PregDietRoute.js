import express, { Router } from "express";
import { dietController } from "../controllers/pregDietController.js";

const dietRouter = Router()

dietRouter.post('/recommendations', dietController )

export default dietRouter