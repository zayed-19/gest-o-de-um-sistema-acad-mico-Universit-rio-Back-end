const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Curso = prisma.curso;

const createCurso = async (data) => {
  const result = await Curso.create({
    data: {
      nome: data.nome,
      duracao: data.duracao,
      id_faculdades: data.id_faculdades,
      id_professor: data.id_professor,
    },
  });
  return result;
};

const getCurso = async () => {
  const result = await Curso.findMany();
  return result;
};

const getCursoById = async (id) => {
  const result = await Curso.findFirst({ where: { id } });
  return result;
};

const updateCurso = async (data, id) => {
  const result = await Curso.update({
    data: {
      nome: data.nome,
      duracao: data.duracao,
      id_faculdades: data.id_faculdades,
      Faculdades: data.Faculdades,
      id_professor: data.id_professor,
      Professor: data.Professor,
      Turma: data.Turma,
      Discicurso: data.Discicurso,
      Cursoprof: data.Cursoprof,
    },
    where: { id },
  });
  return result;
};

const deleteCurso = async (id) => {
  const result = await Curso.delete({ where: { id } });
  return result;
};

module.exports = {
  createCurso,
  getCurso,
  getCursoById,
  deleteCurso,
  updateCurso,
};
