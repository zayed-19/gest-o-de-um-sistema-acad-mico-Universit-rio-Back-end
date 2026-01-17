const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Faculdade = prisma.faculdades;

const createFaculdade = async (data) => {
  const result = await Faculdade.create({
    data: {
      tipos_faculdades: data.tipos_faculdades,
      Cursos: data.Cursos,
    },
  });
  return result;
};

const getFaculdade = async () => {
  const result = await Faculdade.findMany();
  return result;
};

const getFaculdadeById = async (id) => {
  const result = await Faculdade.findFirst({ where: { id } });
  return result;
};

const updateFaculdade = async (data, id) => {
  const result = await Faculdade.update({
    data: {
      tipos_faculdades: data.tipos_faculdades,
      Cursos: data.Cursos,
    },
    where: { id },
  });
  return result;
};

const deleteFaculdade = async (id) => {
  const result = await Faculdade.delete({ where: { id } });
  return result;
};

module.exports = {
  createFaculdade,
  getFaculdade,
  getFaculdadeById,
  deleteFaculdade,
  updateFaculdade,
};
