const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const historico_matricula = prisma.historico_matricula


const createhistorico_matricula = async(data) =>{

    const result = await historico_matricula.create({
        data:{
             id_aluno: data.id_aluno,
             id_matricula: data.id_matricula
        }
    })
    return result
}

const gethistorico_matricula = async() =>{

    const result = await historico_matricula.findMany()
    return result
}

 const gethistorico_matriculaById = async(id) =>{
    const result = await historico_matricula.findFirst({where:{id}})
    return result
}
 const updatehistorico_matricula = async(data, id) =>{
    const result = await historico_matricula.update({
        data:{

             id_aluno: data.id_aluno,
             id_matricula: data.id_matricula

        },
        where:{id}
    })
    return result
}

const deletehistorico_matricula = async(id) =>{
    const result = await historico_matricula.delete({where:{id}})
    return result
}

module.exports ={
    createhistorico_matricula,
    gethistorico_matricula,
    gethistorico_matriculaById,
    deletehistorico_matricula,
    updatehistorico_matricula
}