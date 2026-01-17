const express = require("express");
const TurmaController = require("../controllers/TurmaController");

const turmaRoutes = express.Router();

const TurmaController = new TurmaController();

// Define a rota
turmaRoutes.get("/turma", TurmaController.get);
turmaRoutes.post("/turma", new TurmaController().create);
turmaRoutes.get("/turma/:id", new TurmaController().getById);
turmaRoutes.put("/turma/:id", new TurmaController().update);
turmaRoutes.delete("/turma/:id", new TurmaController().delete);

// Exporta corretamente
module.exports = turmaRoutes;
