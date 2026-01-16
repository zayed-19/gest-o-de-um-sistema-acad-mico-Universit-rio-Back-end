const { PrismaClient } = require("@prisma/client");
const config = require("../../prisma.config").default;

const prisma = new PrismaClient(config);
module.exports = prisma;
