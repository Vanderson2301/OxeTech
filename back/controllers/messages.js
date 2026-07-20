import {
  createMessage,
  listMessages,
  findMessage,
  markMessageAsRead,
  excludeMessage,
} from "../services/messages.js";

const postMessageControllerBody = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string(),

})

const emailBlackList = ["vanderson@gmail.com"];

export const messageCreateController = async (req, res) => {
  try {
  const data = postMessageControllerBody.parse(req.body);
  if (!data.email.includes("@")) {
    throw new Error("Email inválido");
    return;
  }
    const messageId = await createMessage(data);
    res.json({ status: "ok", index: messageId });
  
  }catch(err){
    if (err.name == "ZodError") {
      const message = JSON.parse(err.message)
      res.status(400).send(`Erro de Validação:${message[0].message}`)
      return
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
}
