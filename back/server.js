import dotenv from "dotenv";
import postgres from 'postgres';
import express from "express";
import {
  messageCreateController,
  getMessagesController,
  getMessageByIndexController,
  readMessageController,
  deleteMessageController,
} from "./controllers/messages.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const sql = postgres('postgres://postres:postgres@localhost/5432/db');
const server = new express();


server.use(express.json());

server.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

server.get("/version", (req, res) => {
  res.json({ version: "1.0.0" });
});

server.post("/messages", messageCreateController);

server.get("/messages", getMessagesController);

server.get("/messages/:index", getMessageByIndexController);

server.patch("/messages/:index", readMessageController);

server.delete("/messages/:index", deleteMessageController);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
