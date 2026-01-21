const express = require("express");
const ProfessorController = require("../controllers/ProfessorController");

const professorRoutes = express.Router();

const professorController = new ProfessorController();

// Define a rota
professorRoutes.get("/professor", professorController.get);
professorRoutes.post("/professor", professorController.create);
professorRoutes.get("/professor/:id", professorController.getById);
professorRoutes.put("/professor/:id", professorController.update);
professorRoutes.delete("/professor/:id", professorController.delete);

// Exporta corretamente
module.exports = professorRoutes;
