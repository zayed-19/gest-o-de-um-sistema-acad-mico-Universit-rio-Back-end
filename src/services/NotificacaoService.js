const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Notificacao = prisma.notificacao

const createNotificacao = async (data) => {

    const result = await Notificacao.create({
        data: {
            tipo_notificacoes: data.tipo_notificacoes,
            data_envio: data.data_envio,
            informacao: data.informacao,

        }
    })
    return result
}

const getNotificacao = async () => {

    const result = await Notificacao.findMany()
    return result
}

const getNotificacaoById = async (id) => {
    const result = await Notificacao.findFirst({ where: {id}})
    return result
}   

const updateNotificacao = async (data, id) => {
    const result = await Notificacao.update({
        data: {
            tipo_notificacoes: data.tipo_notificacoes,
            data_envio: data.data_envio,
            informacao: data.informacao

        },
        where: {id}
    })
    return result
}

const deleteNotificacao = async (id) => {
    const result = await Notificacao.delete({ where: {id}})
    return result
}

module.exports = {
    createNotificacao,
    getNotificacao, 
    getNotificacaoById,
    updateNotificacao,
    deleteNotificacao
}