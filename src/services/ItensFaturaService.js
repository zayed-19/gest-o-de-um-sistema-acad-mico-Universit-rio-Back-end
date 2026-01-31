const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ItensFatura = prisma.itensfatura;

const createItensFatura = async (data) => {
  const result = await ItensFatura.create({
    data: {
      valortotal: data.valortotal,
      nr_fatura: data.nr_fatura,
      id_fatura: data.id_fatura,
      id_emolumento: data.id_emolumento,
    },
  });
  return result;
};

const getItensFatura = async () => {
  const result = await ItensFatura.findMany();
  return result;
};

const getItensFaturaById = async (id) => {
  const result = await ItensFatura.findFirst({ where: { id } });
  return result;
};

const updateItensFatura = async (data, id) => {
  const result = await ItensFatura.update({
    data: {
      valortotal: data.valortotal,
      nr_fatura: data.nr_fatura,
      id_fatura: data.id_fatura,
      id_emolumento: data.id_emolumento,
    },
    where: { id },
  });
  return result;
};

const deleteItensFatura = async (id) => {
  const result = await ItensFatura.delete({ where: { id } });
  return result;
};

module.exports = {
  createItensFatura,
  getItensFatura,
  getItensFaturaById,
  deleteItensFatura,
  updateItensFatura,
};
