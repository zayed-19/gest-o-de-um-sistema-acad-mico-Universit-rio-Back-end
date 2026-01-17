const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Cursoprof = prisma.cursoprof;

const createCursoprof = async (data) => {
  const result = await Cursoprof.create({
    data: {
      id_curso: data.id_curso,
      Curso: data.Curso,
      id_professor: data.id_professor,
      Professor: data.Professor,
    },
  });
  return result;
};

const getCursoprof = async () => {
  const result = await Cursoprof.findMany();
  return result;
};

const getCursoprofById = async (id) => {
  const result = await Cursoprof.findFirst({ where: { id } });
  return result;
};

const updateCursoprof = async (data, id) => {
  const result = await Cursoprof.update({
    data: {
      id_curso: data.id_curso,
      Curso: data.Curso,
      id_professor: data.id_professor,
      Professor: data.Professor,
    },
    where: { id },
  });
  return result;
};

const deleteCursoprof = async (id) => {
  const result = await Cursoprof.delete({ where: { id } });
  return result;
};

module.exports = {
  createCursoprof,
  getCursoprof,
  getCursoprofById,
  deleteCursoprof,
  updateCursoprof,
};
