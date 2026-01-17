const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Turmadisci = prisma.turmadisci;

const createTurmadisci = async (data) => {
  const result = await Turmadisci.create({
    data: {
      id_disciplina: data.id_disciplina,
      Disciplina: data.Disciplina,
      id_turma: data.id_turma,
      Turma: data.Turma,
    },
  });
  return result;
};

const getTurmadisci = async () => {
  const result = await Turmadisci.findMany();
  return result;
};

const getTurmadisciById = async (id) => {
  const result = await Turmadisci.findFirst({ where: { id } });
  return result;
};

const updateTurmadisci = async (data, id) => {
  const result = await Turmadisci.update({
    data: {
      id_disciplina: data.id_disciplina,
      Disciplina: data.Disciplina,
      id_turma: data.id_turma,
      Turma: data.Turma,
    },
    where: { id },
  });
  return result;
};

const deleteTurmadisci = async (id) => {
  const result = await Turmadisci.delete({ where: { id } });
  return result;
};

module.exports = {
  createTurmadisci,
  getTurmadisci,
  getTurmadisciById,
  deleteTurmadisci,
  updateTurmadisci,
};
