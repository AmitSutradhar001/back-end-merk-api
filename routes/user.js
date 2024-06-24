import { Router } from "express";
import currentUserController from "../controllers/currentUser.js";

const userRoute = Router();

userRoute.get("/", currentUserController);

export default userRoute;
