const express = require("express");
const MatriculaController = require("../controllers/MatriculaController");

const matriculaRoutes = express.Router();

const matriculaController = new MatriculaController();

// Define a rota
matriculaRoutes.get("/matricula", matriculaController.get);
matriculaRoutes.post("/matricula", matriculaController.create);
matriculaRoutes.get("/matricula/:id", matriculaController.getById);
matriculaRoutes.put("/matricula/:id", matriculaController.update);
matriculaRoutes.delete("/matricula/:id", matriculaController.delete);

// Exporta corretamente
module.exports = matriculaRoutes;
