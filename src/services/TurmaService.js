const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Turma = prisma.turma;

const createTurma = async (data) => {
  const result = await Turma.create({
    data: {
      nome: data.nome,
      id_curso: data.id_curso,
      Curso: data.Cursos,
      Aluno: data.Aluno,
      Turmadisci: data.Turmadisci,
      Turmaprof: data.Turmaprof,
    },
  });
  return result;
};

const getTurma = async () => {
  const result = await Turma.findMany();
  return result;
};

const getTurmaById = async (id) => {
  const result = await Turma.findFirst({ where: { id } });
  return result;
};

const updateTurma = async (data, id) => {
  const result = await Turma.update({
    data: {
      nome: data.nome,
      id_curso: data.id_curso,
      Curso: data.Cursos,
      Aluno: data.Aluno,
      Turmadisci: data.Turmadisci,
      Turmaprof: data.Turmaprof,
    },
    where: { id },
  });
  return result;
};

const deleteTurma = async (id) => {
  const result = await Turma.delete({ where: { id } });
  return result;
};

module.exports = {
  createTurma,
  getTurma,
  getTurmaById,
  deleteTurma,
  updateTurma,
};
