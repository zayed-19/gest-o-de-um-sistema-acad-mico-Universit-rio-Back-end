const express = require("express");
const TurmaController = require("../controllers/TurmaController");

const turmaRoutes = express.Router();

const turmaController = new TurmaController();

// Define a rota
turmaRoutes.get("/turma", turmaController.get);
turmaRoutes.post("/turma", turmaController.create);
turmaRoutes.get("/turma/:id", turmaController.getById);
turmaRoutes.put("/turma/:id", turmaController.update);
turmaRoutes.delete("/turma/:id", turmaController.delete);

// Exporta corretamente
module.exports = turmaRoutes;
