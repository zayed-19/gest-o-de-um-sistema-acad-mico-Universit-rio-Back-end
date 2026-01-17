const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Historico_matricula = prisma.historico_matricula;

const createHistorico_matricula = async (data) => {
  const result = await Historico_matricula.create({
    data: {
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_matricula: data.id_matricula,
      Matricula: data.Matricula,
    },
  });
  return result;
};

const getHistorico_matricula = async () => {
  const result = await Historico_matricula.findMany();
  return result;
};

const getHistorico_matriculaById = async (id) => {
  const result = await Historico_matricula.findFirst({ where: { id } });
  return result;
};

const updateHistorico_matricula = async (data, id) => {
  const result = await Historico_matricula.update({
    data: {
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_matricula: data.id_matricula,
      Matricula: data.Matricula,
    },
    where: { id },
  });
  return result;
};

const deleteHistorico_matricula = async (id) => {
  const result = await Historico_matricula.delete({ where: { id } });
  return result;
};

module.exports = {
  createHistorico_matricula,
  getHistorico_matricula,
  getHistorico_matriculaById,
  deleteHistorico_matricula,
  updateHistorico_matricula,
};
