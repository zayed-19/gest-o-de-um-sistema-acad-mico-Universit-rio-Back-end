const express = require("express");
const DisciplinaController = require("../controllers/DisciplinaController");

const disciplinaRoutes = express.Router();

const disciplinaController = new DisciplinaController();

// Define a rota
disciplinaRoutes.get("/disciplina", disciplinaController.get);
disciplinaRoutes.post("/disciplina", disciplinaController.create);
disciplinaRoutes.get("/disciplina/:id", disciplinaController.getById);
disciplinaRoutes.put("/disciplina/:id", disciplinaController.update);
disciplinaRoutes.delete("/disciplina/:id", disciplinaController.delete);

// Exporta corretamente
module.exports = disciplinaRoutes;
