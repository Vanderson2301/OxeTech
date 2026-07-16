import express from "express";
import {
    messageCreateController,
    getMessagesController,
    getMessagesByIdController,
    markMessageAsReadController,
    deleteMessageController,
} from "../controllers/messages.js";

const router = express.Router();

router.post("/", messageCreateController);

router.get("/", getMessagesController);

router.get("/:id", getMessagesByIdController);

router.patch("/:id", markMessageAsReadController);

router.delete("/:id", deleteMessageController);

export {router};