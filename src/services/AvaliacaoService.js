const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Avaliacao = prisma.avaliacao;

const createAvaliacao = async (data) => {
  const result = await Avaliacao.create({
    data: {
      tipo_avaliacao: data.tipo_avaliacao,
      nota: data.nota,
      data_avaliacao: data.data_avaliacao,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_professor: data.id_professor,
      Professor: data.Professor,
    },
  });
  return result;
};

const getAvaliacao = async () => {
  const result = await Avaliacao.findMany();
  return result;
};

const getAvaliacaoById = async (id) => {
  const result = await Avaliacao.findFirst({ where: { id } });
  return result;
};

const updateAvaliacao = async (data, id) => {
  const result = await Avaliacao.update({
    data: {
      tipo_avaliacao: data.tipo_avaliacao,
      nota: data.nota,
      data_avaliacao: data.data_avaliacao,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_professor: data.id_professor,
      Professor: data.Professor,
    },
    where: { id },
  });
  return result;
};

const deleteAvaliacao = async (id) => {
  const result = await Avaliacao.delete({ where: { id } });
  return result;
};

module.exports = {
  createAvaliacao,
  getAvaliacao,
  getAvaliacaoById,
  deleteAvaliacao,
  updateAvaliacao,
};
