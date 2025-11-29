const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Monumento = prisma.monumento

const createMonumento = async(data) =>{

    const result = await Monumento.create({
        data:{
           referencia: data.referencia,
           propina: data.propina

        }
    })
    return result
}

const getMonumento = async() =>{

    const result = await Monumento.findMany()
    return result
}

 const getMatriculaById = async(id) =>{
    const result = await Monumento.findFirst({where:{id}})
    return result
}
 const updateMonumento = async(data, id) =>{
    const result = await Monumento.update({
        data:{
             referencia: data.referencia,
             propina: data.propina
            
        },
        where:{id}
    })
    return result
}

const deleteMonumento = async(id) =>{
    const result = await Monumento.delete({where:{id}})
    return result
}

module.exports ={
    createMonumento,
    getMonumento,
    getMatriculaById,
    deleteMonumento,
    updateMonumento
}