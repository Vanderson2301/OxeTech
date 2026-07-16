import {getMessages, saveMessage, getMessagesById, deleteMessageById} from "../repositories/messages.js";


export async function createMessage(data) {
  const message = await saveMessage ({name: data.name, email: data.email, message: data.message});
  return message.id
}

export async function listMessages() {
  const messages = await getMessages();
  return messages
}

export async function findMessage(id) {
  return await getMessagesById(id)
}

export async function markMessageAsRead(id) {
 const message = await getMessagesById(id);
 message.read = true;
 const updatedMessage = await saveMessage(message.name, message.email, message.message);
 return updatedMessage
}

export async function excludeMessage(id){
await deleteMessageById(id)
};
