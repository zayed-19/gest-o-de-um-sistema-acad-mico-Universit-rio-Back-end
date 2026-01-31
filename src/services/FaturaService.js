const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Fatura = prisma.fatura;

const createFatura = async (data) => {
  const result = await Fatura.create({
    data: {
      data_emissao: data.data_emissao,
      valor_total: data.valor_total,
    },
  });
  return result;
};

const getFatura = async () => {
  const result = await Fatura.findMany();
  return result;
};

const getFaturaById = async (id) => {
  const result = await Fatura.findFirst({ where: { id } });
  return result;
};

const updateFatura = async (data, id) => {
  const result = await Fatura.update({
    data: {
      data_emissao: data.data_emissao,
      valor_total: data.valor_total,
    },
    where: { id },
  });
  return result;
};

const deleteFatura = async (id) => {
  const result = await Fatura.delete({ where: { id } });
  return result;
};

module.exports = {
  createFatura,
  getFatura,
  getFaturaById,
  deleteFatura,
  updateFatura,
};
