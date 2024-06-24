import { Router } from "express";
import changeKeyController from "../controllers/changeKeyController.js";

const changeKey = Router();
changeKey.patch("/:userKey", changeKeyController);

export default changeKey;
