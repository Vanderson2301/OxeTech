import {Router} from "express";
import {rootController, versionController} from "../controller/root.js";

const router = Router();

router.get("/", rootController);

router.get("/version", versionController);

export {router};