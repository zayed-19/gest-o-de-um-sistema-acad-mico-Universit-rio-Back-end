const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Avaliacao = prisma.avaliacao

const createAvaliacao = async(data) =>{

    const result = await Avaliacao.create({
        data:{
             nota: data.nota,
            data: data.data,
            TipodeAvaliçãoId: data.TipodeAvaliçãoId,
            id_professor: data.id_professor,
            Professor: data.Professor,
            
        }
    })
    return result
}

const getAvaliacao = async() =>{

    const result = await Avaliacao.findMany()
    return result
}

 const getAvaliacaoById = async(id) =>{
    const result = await Avaliacao.findFirst({where:{id}})
    return result
}
 const updateAvaliacao = async(data, id) =>{
    const result = await Avaliacao.update({
        data:{
            nota: data.nota,
            data: data.data,
            TipodeAvaliçãoId: data.TipodeAvaliçãoId,
            id_professor: data.id_professor
            
        },
        where:{id}
    })
    return result
}

const deleteAvaliacao = async(id) =>{
    const result = await Avaliacao.delete({where:{id}})
    return result
}

module.exports ={
    createAvaliacao,
    getAvaliacao,
    getAvaliacaoById,
    deleteAvaliacao,
    updateAvaliacao
}