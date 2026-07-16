import {
  createMessage,
  listMessages,
  findMessage,
  markMessageAsRead,
  excludeMessage,
} from "../services/messages.js";

const emailBlackList = ["vanderson@gmail.com"];

export const messageCreateController = async (req, res) => {
  const data = req.body;
  if (!data) {
    throw new Error("Sem corpo na mensagem");
    return;
  }
  if (!data.email || !data.message || !data.name) {
    throw new Error("Campos obrigatórios não enviados!");
    return;
  }
  if (!data.email.includes("@")) {
    throw new Error("Email inválido");
    return;
  }
  if (emailBlackList.includes(data.email)) {
    throw new Error("Email não permitido");
    return;
  }
  try {
    const messageId = await createMessage(data);
    res.json({ status: "ok", index: messageId });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getMessagesController = async (req, res) => {
  const messages = await listMessages();
  res.json(messages);
};

export const getMessagesByIdController = async (req, res) => {
  const message = await findMessage(req.params.id);
  res.json(message);
};

export const markMessageAsReadController = async (req, res) => {
  const updatedMessage = await markMessageAsRead(req.params.id);
  res.json(updatedMessage);
};

export const deleteMessageController = async (req, res) => {
  await excludeMessage(req.params.id);
  res.json({ status: "ok" });
};
