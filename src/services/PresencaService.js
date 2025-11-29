const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const Presenca = prisma.presenca;   

const createPresenca = async(data) => {
    const result = await Presenca.create({
        data: {
           data_presenca: data.data_presenca,
            status_presenca: data.status_presenca,
            id_aluno: data.id_aluno,
            id_disciplina: data.id_disciplina
        }
    });
    return result;
}

const getPresenca = async() => {
    const result = await Presenca.findMany();
    return result;
}

const getPresencaById = async(id) => {
    const result = await Presenca.findFirst({ where: { id } });
    return result;
}

const updatePresenca = async(data, id) => {
    const result = await Presenca.update({
        data: {
              data_presenca: data.data_presenca,
            status_presenca: data.status_presenca,
            id_aluno: data.id_aluno,
            id_disciplina: data.id_disciplina
        },
        where: { id }
    });
    return result;
}

const deletePresenca = async(id) => {
    const result = await Presenca.delete({ where: { id } });
    return result;
}

module.exports = {
    createPresenca,
    getPresenca,
    getPresencaById,
    updatePresenca,
    deletePresenca
}