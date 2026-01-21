const express = require("express");
const AlunoController = require("../controllers/AlunoController");

const alunoRoutes = express.Router();

const alunoController = new AlunoController();

// Define a rota
alunoRoutes.get("/aluno", new alunoController.get());
alunoRoutes.post("/aluno", new AlunoController().create);
alunoRoutes.get("/aluno/:id", new AlunoController().getById);
alunoRoutes.put("/aluno/:id", new AlunoController().update);
alunoRoutes.delete("/aluno/:id", new AlunoController().delete);

// Exporta corretamente
module.exports = alunoRoutes;
