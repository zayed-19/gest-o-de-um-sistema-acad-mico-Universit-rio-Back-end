const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Pagamento = prisma.pagamento

const createPagamento = async(data) => {
    const result = await Pagamento.create({
        data: {
           metodo_de_pagamento: data.metodo_de_pagamento,
            valor: data.valor,
            id_monumento: data.id_monumento,
            datadoPagamento: data.datadoPagamento,
            Recibos: data.Recibos,
            Faturas: data.Faturas,
            Monumento: data.Monumento
        }
    })
    return result
}

const getPagamento = async() => {
    const result = await Pagamento.findMany()
    return result
}

const getPagamentoById = async(id) => {
    const result = await Pagamento.findFirst({ where: { id } })
    return result
}

const updatePagamento = async(data, id) => {
    const result = await Pagamento.update({
        data: {
           metodo_de_pagamento: data.metodo_de_pagamento,
            valor: data.valor,
            id_monumento: data.id_monumento,
            datadoPagamento: data.datadoPagamento

        },
        where: { id }
    })
    return result
}

const deletePagamento = async(id) => {
    const result = await Pagamento.delete({ where: { id } })
    return result
}

module.exports = {
    createPagamento,
    getPagamento,
    getPagamentoById,
    updatePagamento,
    deletePagamento
}   