const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const Relatorio = prisma.relatorio;

const createRelatorio = async(data) => {
    const result = await Relatorio.create({
        data: {
            tipo_relatorio: data.tipo_relatorio,
            data_geracao: data.data_geracao
        }
    });
    return result;
}

const getRelatorio = async() => {
    const result = await Relatorio.findMany();
    return result;
}

const getRelatorioById = async(id) => {
    const result = await Relatorio.findFirst({ where: { id } });
    return result;
}

const updateRelatorio = async(data, id) => {
    const result = await Relatorio.update({
        data: {
            tipo_relatorio: data.tipo_relatorio,
            data_geracao: data.data_geracao
        },
        where: { id }
    });
    return result;
}

const deleteRelatorio = async(id) => {
    const result = await Relatorio.delete({ where: { id } });
    return result;
}

module.exports = {
    createRelatorio,
    getRelatorio,
    getRelatorioById,
    updateRelatorio,
    deleteRelatorio
}

