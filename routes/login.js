import { Router } from "express";
import loginController from "../controllers/loginController.js";

const loginRoute = Router();
loginRoute.post("/", loginController);

export default loginRoute;
