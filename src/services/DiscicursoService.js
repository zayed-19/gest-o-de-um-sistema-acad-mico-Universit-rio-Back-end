const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Discicurso = prisma.discicurso;

const createDiscicurso = async (data) => {
  const result = await Discicurso.create({
    data: {
      id_disciplina: data.id_disciplina,
      id_curso: data.id_curso,
    },
  });
  return result;
};

const getDiscicurso = async () => {
  const result = await Discicurso.findMany();
  return result;
};

const getDiscicursoById = async (id) => {
  const result = await Discicurso.findFirst({ where: { id } });
  return result;
};

const updateDiscicurso = async (data, id) => {
  const result = await Discicurso.update({
    data: {
      id_disciplina: data.id_disciplina,
      id_curso: data.id_curso,
    },
    where: { id },
  });
  return result;
};

const deleteDiscicurso = async (id) => {
  const result = await Discicurso.delete({ where: { id } });
  return result;
};

module.exports = {
  createDiscicurso,
  getDiscicurso,
  getDiscicursoById,
  deleteDiscicurso,
  updateDiscicurso,
};
