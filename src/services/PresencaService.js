const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Presenca = prisma.presenca;

const createPresenca = async (data) => {
  const result = await Presenca.create({
    data: {
      data_presenca: data.data_presenca,
      status: data.status,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_disciplina: data.id_disciplina,
      Disciplina: data.Disciplina,
    },
  });
  return result;
};

const getPresenca = async () => {
  const result = await Presenca.findMany();
  return result;
};

const getPresencaById = async (id) => {
  const result = await Presenca.findFirst({ where: { id } });
  return result;
};

const updatePresenca = async (data, id) => {
  const result = await Presenca.update({
    data: {
      data_presenca: data.data_presenca,
      status: data.status,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_disciplina: data.id_disciplina,
      Disciplina: data.Disciplina,
    },
    where: { id },
  });
  return result;
};

const deletePresenca = async (id) => {
  const result = await Presenca.delete({ where: { id } });
  return result;
};

module.exports = {
  createPresenca,
  getPresenca,
  getPresencaById,
  deletePresenca,
  updatePresenca,
};
