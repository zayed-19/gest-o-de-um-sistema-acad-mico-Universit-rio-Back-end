const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Aluno = prisma.aluno;

const createAluno = async (data) => {
  const result = await Aluno.create({
    data: {
      nome: data.nome,
      dataNasc: data.dataNasc,
      genero: data.genero,
      morada: data.morada,
      telefone: data.telefone,
      idade: data.idade,
      id_turma: data.id_turma,
      Turma: data.turma,
      Avaliacao: data.Avaliacao,
      Pagamento: data.Pagamento,
      Matricula: data.Matricula,
      Presenca: data.Presenca,
      Historico_matricula: data.Historico_matricula,
    },
  });
  return result;
};
const getAluno = async () => {
  const result = await Aluno.findMany();
  return result;
};

const getAlunoById = async (id) => {
  const result = await Aluno.findFirst({ where: { id } });
  return result;
};
const updateAluno = async (data, id) => {
  const result = await Aluno.update({
    data: {
      nome: data.nome,
      dataNasc: data.dataNasc,
      genero: data.genero,
      morada: data.morada,
      telefone: data.telefone,
      idade: data.idade,
      id_turma: data.id_turma,
      Turma: data.turma,
      Avaliacao: data.Avaliacao,
      Pagamento: data.Pagamento,
      Matricula: data.Matricula,
      Presenca: data.Presenca,
      Historico_matricula: data.Historico_matricula,
    },
    where: { id },
  });
  return result;
};
const deleteAluno = async (id) => {
  const result = await Aluno.delete({ where: { id } });
  return result;
};

module.exports = {
  createAluno,
  getAluno,
  getAlunoById,
  deleteAluno,
  updateAluno,
};
