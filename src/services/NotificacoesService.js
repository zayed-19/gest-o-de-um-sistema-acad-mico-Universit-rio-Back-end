const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Notificacoes = prisma.notificacoes;

const createNotificacoes = async (data) => {
  const result = await Notificacoes.create({
    data: {
      tipo_notificacao: data.tipo_notificacao,
      data_envio: data.data_envio,
      informacao: data.informacao,
    },
  });
  return result;
};

const getNotificacoes = async () => {
  const result = await Notificacoes.findMany();
  return result;
};

const getNotificacoesById = async (id) => {
  const result = await Notificacoes.findFirst({ where: { id } });
  return result;
};

const updateNotificacoes = async (data, id) => {
  const result = await Notificacoes.update({
    data: {
      tipo_notificacao: data.tipo_notificacao,
      data_envio: data.data_envio,
      informacao: data.informacao,
    },
    where: { id },
  });
  return result;
};

const deleteNotificacoes = async (id) => {
  const result = await Notificacoes.delete({ where: { id } });
  return result;
};

module.exports = {
  createNotificacoes,
  getNotificacoes,
  getNotificacoesById,
  deleteNotificacoes,
  updateNotificacoes,
};
