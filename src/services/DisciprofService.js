const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Disciprof = prisma.disciprof;

const createDisciprof = async (data) => {
  const result = await Disciprof.create({
    data: {
      id_disciplina: data.id_disciplina,
      Disciplina: data.Disciplina,
      id_professor: data.id_professor,
      Professor: data.Professor,
    },
  });
  return result;
};

const getDisciprof = async () => {
  const result = await Disciprof.findMany();
  return result;
};

const getDisciprofById = async (id) => {
  const result = await Disciprof.findFirst({ where: { id } });
  return result;
};

const updateDisciprof = async (data, id) => {
  const result = await Disciprof.update({
    data: {
      id_disciplina: data.id_disciplina,
      Disciplina: data.Disciplina,
      id_professor: data.id_professor,
      Professor: data.Professor,
    },
    where: { id },
  });
  return result;
};

const deleteDisciprof = async (id) => {
  const result = await Disciprof.delete({ where: { id } });
  return result;
};

module.exports = {
  createDisciprof,
  getDisciprof,
  getDisciprofById,
  deleteDisciprof,
  updateDisciprof,
};
