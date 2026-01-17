const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Pagamento = prisma.pagamento;

const createPagamento = async (data) => {
  const result = await Pagamento.create({
    data: {
      metodo_pagamento: data.metodo_pagamento,
      data_pagamento: data.data_pagamento,
      valor: data.valor,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_emolumento: data.id_emolumento,
      Emolumento: data.Emolumento,
      id_fatura: data.id_fatura,
      Fatura: data.Fatura,
    },
  });
  return result;
};

const getPagamento = async () => {
  const result = await Pagamento.findMany();
  return result;
};

const getPagamentoById = async (id) => {
  const result = await Pagamento.findFirst({ where: { id } });
  return result;
};

const updatePagamento = async (data, id) => {
  const result = await Pagamento.update({
    data: {
      metodo_pagamento: data.metodo_pagamento,
      data_pagamento: data.data_pagamento,
      valor: data.valor,
      id_aluno: data.id_aluno,
      Aluno: data.Aluno,
      id_emolumento: data.id_emolumento,
      Emolumento: data.Emolumento,
      id_fatura: data.id_fatura,
      Fatura: data.Fatura,
    },
    where: { id },
  });
  return result;
};

const deletePagamento = async (id) => {
  const result = await Pagamento.delete({ where: { id } });
  return result;
};

module.exports = {
  createPagamento,
  getPagamento,
  getPagamentoById,
  deletePagamento,
  updatePagamento,
};
