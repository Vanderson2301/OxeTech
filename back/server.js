import 'dotenv/config';
import express from 'express';
import {router as messagesRouter} from "./routes/messages.js";

const PORT = process.env.PORT || 3000;

const server = new express();

server.use(express.json());

server.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

server.get("/version", (req, res) => {
  res.json({ version: "2.0.0" });
});

server.use("/messages", messagesRouter);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
