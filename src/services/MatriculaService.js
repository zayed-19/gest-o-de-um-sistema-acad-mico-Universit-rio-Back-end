const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Matricula = prisma.matricula;

const createMatricula = async (data) => {
  const result = await Matricula.create({
    data: {
      ano_lectivo: data.ano_lectivo,
      data_matricula: data.data_matricula,
      estado_matricula: data.estado_matricula,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      Historico_matricula: data.Historico_matricula,
    },
  });
  return result;
};

const getMatricula = async () => {
  const result = await Matricula.findMany();
  return result;
};

const getMatriculaById = async (id) => {
  const result = await Matricula.findFirst({ where: { id } });
  return result;
};

const updateMatricula = async (data, id) => {
  const result = await Matricula.update({
    data: {
      ano_lectivo: data.ano_lectivo,
      data_matricula: data.data_matricula,
      estado_matricula: data.estado_matricula,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      Historico_matricula: data.Historico_matricula,
    },
    where: { id },
  });
  return result;
};

const deleteMatricula = async (id) => {
  const result = await Matricula.delete({ where: { id } });
  return result;
};

module.exports = {
  createMatricula,
  getMatricula,
  getMatriculaById,
  deleteMatricula,
  updateMatricula,
};
