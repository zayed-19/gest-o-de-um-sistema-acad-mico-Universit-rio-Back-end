const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Usuario = prisma.usuario;

// REGISTAR USUÁRIO (SEM HASH)
const registerUser = async (data) => {
  const existe = await Usuario.findUnique({
    where: { email: data.email },
  });

  if (existe) {
    throw new Error("Email já cadastrado");
  }

  const result = await Usuario.create({
    data: {
      email: data.email,
      senha: data.senha, // senha pura
    },
  });

  return result;
};

// LOGIN (VALIDAÇÃO SIMPLES)
const loginUser = async (data) => {
  const usuario = await Usuario.findUnique({
    where: { email: data.email },
  });

  if (!usuario || usuario.senha !== data.senha) {
    throw new Error("Email ou senha inválidos");
  }

  return usuario; // sem token
};

module.exports = {
  registerUser,
  loginUser,
};
