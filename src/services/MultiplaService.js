const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Multipla = prisma.multipla

const createMultipla = async (data) => {

    const result = await Multipla.create({
        data: {

            turmas: data.turmas,
            disciplinas: data.disciplinas,
            professores: data.professores,
            cursos: data.cursos

        }
    })
    return result
}

const getMultipla = async () => {

    const result = await Multipla.findMany()
    return result
}

const getMultiplaById = async (id) => {
    const result = await Multipla.findFirst({ where: {id}})
    return result
}

const updateMultipla = async (data, id) => {
    const result = await Multipla.update({
        data: {
            turmas: data.turmas,
            disciplinas: data.disciplinas,
            professores: data.professores,
            cursos: data.cursos
        },
        where: { id }
    })
    return result
}

const deleteMultipla = async (id) => {
    const result = await Multipla.delete({ where: {id}})
    return result
}

module.exports = {
    createMultipla,
    getMultipla,
    getMultiplaById,
    updateMultipla,
    deleteMultipla
}


