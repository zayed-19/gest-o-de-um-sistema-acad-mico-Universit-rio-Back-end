const express = require("express");
const MatriculaController = require("../controllers/MatriculaController");

const matriculaRoutes = express.Router();

const MatriculaController = new MatriculaController();

// Define a rota
matriculaRoutes.get("/matricula", MatriculaController.get);
matriculaRoutes.post("/matricula", new MatriculaController().create);
matriculaRoutes.get("/matricula/:id", new MatriculaController().getById);
matriculaRoutes.put("/matricula/:id", new MatriculaController().update);
matriculaRoutes.delete("/matricula/:id", new MatriculaController().delete);

// Exporta corretamente
module.exports = matriculaRoutes;
