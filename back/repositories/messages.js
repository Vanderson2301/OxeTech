import {sql} from "../db/db.js";

export async function getMessages(){
    return await sql `SELECT * FROM messages`;
}

export async function saveMessage({name, email, message}){
    return await sql `INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message}) returning *`}

export async function getMessagesById(id){
    return await sql `SELECT * FROM messages WHERE id = ${id}`;
}

export async function deleteMessageById(id){
    return await sql `DELETE FROM messages WHERE id = ${id}`;
}