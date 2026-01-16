const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Recibo = prisma.recibo

const createRecibo = async(data) =>{
    const result = await Recibo.create({
        data:{
             NrRecibo: data.NrRecibo,
             dataEmissão: data.dataEmissão,
             id_pagamento: data.id_pagamento,
             Pagamento: data.Pagamento
        }
    })
    return result
}

const getRecibo = async() =>{
    const result = await Recibo.findMany()
    return result
}

const getReciboById = async(id) =>{
    const result = await Recibo.findFirst({where:{id}})
    return result
}

const updateRecibo = async(data, id) =>{
    const result = await Recibo.update({
        data:{
                NrRecibo: data.NrRecibo,
                dataEmissão: data.dataEmissão,
                id_pagamento: data.id_pagamento
        },  
        where:{id}
    })
    return result
}

const deleteRecibo = async(id) =>{
    const result = await Recibo.delete({where:{id}})
    return result
}

module.exports ={
    createRecibo,
    getRecibo,
    getReciboById,
    updateRecibo,
    deleteRecibo
}