const emailBlackList = ['vanderson@gmail.com']
const messages = []

export function createMessage(data){
    if (!data){
            throw new Error ("Sem corpo na mensagem")
            return
        }
        if (!data.email || !data.message || !data.name){
            throw new Error ("Campos obrigatórios não enviados!")
            return
        }
        if (!data.email.includes('@')){
            throw new Error ("Email inválido")
            return
        }
        if (emailBlackList.includes(data.email)){
            throw new Error ("Email não permitido")
            return
        }
        messages.push({...data, readed: false})
        return messages.length - 1
}

export function listMessages(){
    return messages
}

export function getMessageByIndex(index){
    return messages[index]
}

export function readMessage(index){
    const message = messages[index]
    message.readed = true
    messages[index] = message
    return message
}

export function deleteMessage(index){
    messages.splice(req.params.index, 1)
    return messages.length
}