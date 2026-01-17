const express = require("express");
const DisciplinaController = require("../controllers/DisciplinaController");

const disciplinaRoutes = express.Router();

const DisciplinaController = new DisciplinaController();

// Define a rota
disciplinaRoutes.get("/disciplina", DisciplinaController.get);
disciplinaRoutes.post("/disciplina", new DisciplinaController().create);
disciplinaRoutes.get("/disciplina/:id", new DisciplinaController().getById);
disciplinaRoutes.put("/disciplina/:id", new DisciplinaController().update);
disciplinaRoutes.delete("/disciplina/:id", new DisciplinaController().delete);

// Exporta corretamente
module.exports = disciplinaRoutes;
