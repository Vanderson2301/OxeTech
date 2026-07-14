import postgres from "postgres";


const messages = [];

const sql = postgres("postgres://postgres:postgres@localhost:5432/db)", {max: 5});

export function createMessage(data) {
  messages.push({ ...data, readed: false });
  sql `INSERT INTO messages ${sql(data)}`;
  return messages.length - 1;
}

export function listMessages() {
  return messages;
}

export function getMessageByIndex(index) {
  return messages[index];
}

export function readMessage(index) {
  const message = messages[index];
  message.readed = true;
  messages[index] = message;
  return message;
}

export function deleteMessage(index) {
  messages.splice(index, 1);
  return messages.length;
}
