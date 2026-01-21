const express = require("express");
const AlunoController = require("../controllers/AlunoController");

const alunoRoutes = express.Router();

const alunoController = new AlunoController();

// Define a rota
alunoRoutes.get("/aluno", alunoController.get);
alunoRoutes.post("/aluno", alunoController.create);
alunoRoutes.get("/aluno/:id", alunoController.getById);
alunoRoutes.put("/aluno/:id", alunoController.update);
alunoRoutes.delete("/aluno/:id", alunoController.delete);

// Exporta corretamente
module.exports = alunoRoutes;
