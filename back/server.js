const express = require('express');
const { messageCreateController, getMessagesController, getMessageByIndexController, readMessageController, deleteMessageController } = require('./controllers/messages.js')

const server = new express();

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({ status: "ok" })
})

server.get('/version', (req, res) => {
    res.json({ version: "1.0.0" })
})

server.post('/messages', messageCreateController)

server.get('/messages', getMessagesController)

server.get('/messages/:index', getMessageByIndexController)

server.patch('/messages/:index', readMessageController)

server.delete('/messages/:index', deleteMessageController)

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})