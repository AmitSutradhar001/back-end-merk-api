import { Router } from "express";
import currentUserController from "../controllers/currentUser.js";

const userRoute = Router();

userRoute.post("/", currentUserController);

export default userRoute;
