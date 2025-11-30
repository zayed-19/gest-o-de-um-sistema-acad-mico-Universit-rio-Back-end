const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Documento = prisma.documento

const createDocumento = async(data) =>{

    const result = await Documento.create({
        data:{
               tipodedocumentos: data.tipodedocumentos,
               Alunos: data.Alunos
        }
    })
    return result
}

const getDocumento = async() =>{

    const result = await Documento.findMany()
    return result
}

 const getDocumentoById = async(id) =>{
    const result = await Documento.findFirst({where:{id}})
    return result
}
 const updateDocumento = async(data, id) =>{
    const result = await Documento.update({
        data:{
            
            tipodedocumentos: data.tipodedocumentos

        },
        where:{id}
    })
    return result
}

const deleteDocumento = async(id) =>{
    const result = await Documento.delete({where:{id}})
    return result
}

module.exports ={
    createDocumento,
    getDocumento,
    getDocumentoById,
    deleteDocumento,
    updateDocumento
}