const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Disciplina = prisma.disciplina

const createDisciplina = async(data) =>{

    const result = await Disciplina.create({
        data:{
               tipo_disciplina: data.tipo_disciplina,
               id_multipla: data.id_multipla,
               
               
        }
    })
    return result
}

const getDisciplina = async() =>{

    const result = await Disciplina.findMany()
    return result
}

 const getDisciplinaById = async(id) =>{
    const result = await Disciplina.findFirst({where:{id}})
    return result
}
 const updateDisciplina = async(data, id) =>{
    const result = await Disciplina.update({
        data:{
            
               tipo_disciplina: data.tipo_disciplina,
               id_multipla: data.id_multipla,
               
        },
        where:{id}
    })
    return result
}

const deleteDisciplina = async(id) =>{
    const result = await Disciplina.delete({where:{id}})
    return result
}

module.exports ={
    createDisciplina,
    getDisciplina,
    getDisciplinaById,
    deleteDisciplina,
    updateDisciplina
}