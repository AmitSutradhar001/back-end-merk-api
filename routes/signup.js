import { Router } from "express";
import signupController from "../controllers/signupController.js";

const signupRoute = Router();
signupRoute.post("/", signupController);

export default signupRoute;
