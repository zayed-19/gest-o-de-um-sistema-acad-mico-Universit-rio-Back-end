const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const Faculdades = prisma.faculdades

const createFaculdades = async(data) =>{

    const result = await Faculdades.create({
        data:{
              tipos_faculdades: data.tipos_faculdades
        }
    })
    return result
}

const getFaculdades = async() =>{

    const result = await Faculdades.findMany()
    return result
}

 const getFaculdadesById = async(id) =>{
    const result = await Faculdades.findFirst({where:{id}})
    return result
}
 const updateFaculdades = async(data, id) =>{
    const result = await Faculdades.update({
        data:{
            
           tipos_faculdades: data.tipos_faculdades

        },
        where:{id}
    })
    return result
}

const deleteFaculdades = async(id) =>{
    const result = await Faculdades.delete({where:{id}})
    return result
}

module.exports ={
    createFaculdades,
    getFaculdades,
    getFaculdadesById,
    deleteFaculdades,
    updateFaculdades
}