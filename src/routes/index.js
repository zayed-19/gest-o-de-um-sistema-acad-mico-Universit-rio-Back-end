const express = require("express");
const routeRoot = express.Router();

const alunoRoutes = require("./alunoRoutes");
const avaliacaoRoutes = require("./avaliacaoRoutes");
const cargoRoutes = require("./cargoRoutes");
const cursoRoutes = require("./cursoRoutes");
const documentoRoutes = require("./documentoRoutes");
const disciplinaRoutes = require("./disciplinaRoutes");
const faculdadeRoutes = require("./faculdadeRoutes");
const faturaRoutes = require("./faturaRoutes");
const histtorico_matriculaRoutes = require("./historico_matriculaRoutes");
const professorRoutes = require("./professorRoutes");
const matriculaRoutes = require("./matriculaRoutes");
const emolumentoRoutes = require("./emolumentoRoutes");
const pagamentoRoutes = require("./pagamentoRoutes");
const turmaRoutes = require("./turmaRoutes");
const presencaRoutes = require("./presencaRoutes");

routesRoot.use(alunoRoutes);
routesRoot.use(avaliacaoRoutes);
routesRoot.use(cargoRoutes);
routesRoot.use(cursoRoutes);
routesRoot.use(documentoRoutes);
routesRoot.use(disciplinaRoutes);
routesRoot.use(faculdadeRoutes);
routesRoot.use(faturaRoutes);
routesRoot.use(histtorico_matriculaRoutes);
routesRoot.use(professorRoutes);
routesRoot.use(matriculaRoutes);
routesRoot.use(emolumentoRoutes);
routesRoot.use(pagamentoRoutes);
routesRoot.use(turmaRoutes);
routesRoot.use(presencaRoutes);

module.exports = routeRoot;
