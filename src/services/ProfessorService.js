const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const Professor = prisma.professor;

const createProfessor = async(data) => {
    const result = await Professor.create({
        data: {
              nome: data.nome,
              BI: data.BI,
              telefone: data.telefone,
              email: data.email,
              id_multipla: data.id_multipla
        }
    });
    return result;
}   

const getProfessor = async() => {
    const result = await Professor.findMany();
    return result;
}   

const getProfessorById = async(id) => {
    const result = await Professor.findFirst({ where: { id } });
    return result;
}

const updateProfessor = async(data, id) => {
    const result = await Professor.update({
        data: {
              nome: data.nome,
                BI: data.BI,
                telefone: data.telefone,
                email: data.email,
                id_multipla: data.id_multipla
        },
        where: { id }
    });
    return result;
}

const deleteProfessor = async(id) => {
    const result = await Professor.delete({ where: { id } });
    return result;
}

module.exports = {
    createProfessor,
    getProfessor,
    getProfessorById,
    updateProfessor,
    deleteProfessor
}