const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Cargo = prisma.cargo;

const createCargo = async (data) => {
  const result = await Cargo.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
    },
  });
  return result;
};

const getCargo = async () => {
  const result = await Cargo.findMany();
  return result;
};

const getCargoById = async (id) => {
  const result = await Cargo.findFirst({ where: { id } });
  return result;
};

const updateCargo = async (data, id) => {
  const result = await Cargo.update({
    data: {
      nome: data.nome,
      descricao: data.descricao,
    },
    where: { id },
  });
  return result;
};

const deleteCargo = async (id) => {
  const result = await Cargo.delete({ where: { id } });
  return result;
};

module.exports = {
  createCargo,
  getCargo,
  getCargoById,
  deleteCargo,
  updateCargo,
};
