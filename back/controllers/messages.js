import {
  createMessage,
  listMessages,
  getMessageByIndex,
  readMessage,
  deleteMessage,
} from "../services/messages.js";

const emailBlackList = ["vanderson@gmail.com"];

export const messageCreateController = (req, res) => {
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
    const finalIndex = createMessage(data);
    res.json({ status: "ok", index: finalIndex });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getMessagesController = (req, res) => {
  const messages = listMessages();
  res.json(messages);
};

export const getMessageByIndexController = (req, res) => {
  const menssage = getMessageByIndex(req.params.index);
  res.json(menssage);
};

export const readMessageController = (req, res) => {
  const updateMessage = readMessage(req.params.index);
  res.json(updateMessage);
};

export const deleteMessageController = (req, res) => {
  const finalLength = deleteMessage(req.params.index);
  res.json({ status: "ok", length: finalLength });
};
