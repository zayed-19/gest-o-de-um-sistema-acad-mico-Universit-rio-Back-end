const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Turmaprof = prisma.turmaprof;

const createTurmaprof = async (data) => {
  const result = await Turmaprof.create({
    data: {
      id_professor: data.id_professor,
      id_turma: data.id_turma,
    },
  });
  return result;
};

const getTurmaprof = async () => {
  const result = await Turmaprof.findMany();
  return result;
};

const getTurmaprofById = async (id) => {
  const result = await Turmaprof.findFirst({ where: { id } });
  return result;
};

const updateTurmaprof = async (data, id) => {
  const result = await Turmaprof.update({
    data: {
      id_professor: data.id_professor,
      id_turma: data.id_turma,
    },
    where: { id },
  });
  return result;
};

const deleteTurmaprof = async (id) => {
  const result = await Turmaprof.delete({ where: { id } });
  return result;
};

module.exports = {
  createTurmaprof,
  getTurmaprof,
  getTurmaprofById,
  deleteTurmaprof,
  updateTurmaprof,
};
