const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Emolumento = prisma.emolumento;

const createEmolumento = async (data) => {
  const result = await Emolumento.create({
    data: {
      referencia: data.referencia,
      valor: data.valor,
      Itensfatura: data.Itensfatura,
      Pagamento: data.Pagamento,
    },
  });
  return result;
};

const getEmolumento = async () => {
  const result = await Emolumento.findMany();
  return result;
};

const getEmolumentoById = async (id) => {
  const result = await Emolumento.findFirst({ where: { id } });
  return result;
};

const updateEmolumento = async (data, id) => {
  const result = await Emolumento.update({
    data: {
      referencia: data.referencia,
      valor: data.valor,
      Itensfatura: data.Itensfatura,
      Pagamento: data.Pagamento,
    },
    where: { id },
  });
  return result;
};

const deleteEmolumento = async (id) => {
  const result = await Emolumento.delete({ where: { id } });
  return result;
};

module.exports = {
  createEmolumento,
  getEmolumento,
  getEmolumentoById,
  deleteEmolumento,
  updateEmolumento,
};
