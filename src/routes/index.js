const express = require("express");
const routesRoot = express.Router();

const alunoRoutes = require("./alunoRoutes");
const avaliacaoRoutes = require("./avaliacaoRoutes");
const cargoRoutes = require("./cargoRoutes");
const cursoRoutes = require("./cursoRoutes");
const cursoprofRoutes = require("./cursoprofRoutes");
const disciprofRoutes = require("./disciprofRoutes");
const discicursoRoutes = require("./discicursoRoutes");
const disciplinaRoutes = require("./disciplinaRoutes");
const documentoRoutes = require("./documentoRoutes");
const emolumentoRoutes = require("./emolumentoRoutes");
const faculdadesRoutes = require("./faculdadesRoutes");
const faturaRoutes = require("./faturaRoutes");
const historico_matriculaRoutes = require("./historico_matriculaRoutes");
const itensfaturaRoutes = require("./itensfaturaRoutes");
const matriculaRoutes = require("./matriculaRoutes");
const notificacoesRoutes = require("./notificacoesRoutes");
const pagamentoRoutes = require("./pagamentoRoutes");
const presencaRoutes = require("./presencaRoutes");
const professorRoutes = require("./professorRoutes");
const turmadisciRoutes = require("./turmadisciRoutes");
const turmaprofRoutes = require("./turmaprofRoutes");
const turmaRoutes = require("./turmaRoutes");
const authRoutes = require("./authRoutes");

//adicionar os outros ficheiros de rota aqui

routesRoot.use(alunoRoutes);
routesRoot.use(avaliacaoRoutes);
routesRoot.use(cargoRoutes);
routesRoot.use(cursoRoutes);
routesRoot.use(cursoprofRoutes);
routesRoot.use(disciprofRoutes);
routesRoot.use(discicursoRoutes);
routesRoot.use(disciplinaRoutes);
routesRoot.use(documentoRoutes);
routesRoot.use(emolumentoRoutes);
routesRoot.use(faculdadesRoutes);
routesRoot.use(faturaRoutes);
routesRoot.use(historico_matriculaRoutes);
routesRoot.use(itensfaturaRoutes);
routesRoot.use(matriculaRoutes);
routesRoot.use(notificacoesRoutes);
routesRoot.use(pagamentoRoutes);
routesRoot.use(presencaRoutes);
routesRoot.use(professorRoutes);
routesRoot.use(turmadisciRoutes);
routesRoot.use(turmaprofRoutes);
routesRoot.use(turmaRoutes);
routesRoot.use(authRoutes);

//replicar para todos os outros ficheiros

module.exports = routesRoot;
