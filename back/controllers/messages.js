import { createMessage, listMessages, getMessageByIndex, readMessage, deleteMessage } from '../services/messages.js'


export const messageCreateController = (req, res) => {
        const data = req.body
        try{
            const finalIndex = createMessage(data)
            res.json({ status: "ok", index: finalIndex})
        } catch (err){
            res.status(400).send(err.message)
        }
    }

    export const getMessagesController = (req, res) => {
        const messages = listMessages()
        res.json(messages)
    }

    export const getMessageByIndexController = (req, res) => {
        const menssage = getMessageByIndex(req.params.index)
        res.json(menssage)
    }

    export const readMessageController = (req, res) => {
        const updateMessage = readMessage(req.params.index)
        res.json(updateMessage)
    }

    export const deleteMessageController = (req, res) => {
        const finalLength = deleteMessage(req.params.index)
        res.json({status: "ok", length: finalLength })
    }