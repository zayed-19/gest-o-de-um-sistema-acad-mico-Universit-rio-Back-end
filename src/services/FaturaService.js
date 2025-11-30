const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Fatura = prisma.fatura

const createFatura = async(data) =>{

    const result = await Fatura.create({
        data:{
            nr_fatura: data.nr_fatura,
           dataEMISSÃO: data.dataEMISSÃO,
           Valor_Total: data.Valor_Total,
           id_pagamento: data.id_pagamento    
        }
    })
    return result
}

const getFatura = async() =>{

    const result = await Fatura.findMany()
    return result
}

 const getFaturaById = async(id) =>{
    const result = await Fatura.findFirst({where:{id}})
    return result
}
 const updateFatura = async(data, id) =>{
    const result = await Fatura.update({
        data:{
            
           nr_fatura: data.nr_fatura,
           dataEMISSÃO: data.dataEMISSÃO,
           Valor_Total: data.Valor_Total,
           id_pagamento: data.id_pagamento

        },
        where:{id}
    })
    return result
}

const deleteFatura = async(id) =>{
    const result = await Fatura.delete({where:{id}})
    return result
}

module.exports ={
    createFatura,
    getFatura,
    getFaturaById,
    deleteFatura,
    updateFatura
}