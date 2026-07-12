import {Router} from "express";
import {authStatusController} from "../controller/auth/status.js";
import {authWhoAmIController} from "../controller/auth/whoAmI.js";

const router = Router();

router.get("/status", authStatusController);

router.get("/whoAmI", authWhoAmIController);

export {router};