const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Curso = prisma.curso

const createCurso = async(data) =>{

    const result = await Curso.create({
        data:{
            nome: data.nome,
            duração: data.duração,
            coordenador: data.coordenador,
            id_faculdade: data.id_faculdade,
            id_multipla: data.id_multipla
        }
    })
    return result
}

const getCurso = async() =>{

    const result = await Curso.findMany()
    return result
}

 const getCursoById = async(id) =>{
    const result = await Curso.findFirst({where:{id}})
    return result
}
 const updateCurso = async(data, id) =>{
    const result = await Curso.update({
        data:{
            nome: data.nome,
            duração: data.duração,
            coordenador: data.coordenador,
            id_faculdade: data.id_faculdade,
            id_multipla: data.id_multipla
        },
        where:{id}
    })
    return result
}

const deleteCurso = async(id) =>{
    const result = await Curso.delete({where:{id}})
    return result
}

module.exports ={
    createCurso,
    getCurso,
    getCursoById,
    deleteCurso,
    updateCurso
}