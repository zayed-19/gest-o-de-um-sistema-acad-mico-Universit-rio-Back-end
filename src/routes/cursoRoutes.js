const express = require("express");
const CursoController = require("../controllers/CursoController");

const cursoRoutes = express.Router();

const cursoController = new CursoController();

// Define a rota
cursoRoutes.get("/curso", cursoController.get);
cursoRoutes.post("/Curso", cursoController.create);
cursoRoutes.get("/curso/:id", cursoController.getById);
cursoRoutes.put("/curso/:id", cursoController.update);
cursoRoutes.delete("/curso/:id", cursoController.delete);

// Exporta corretamente
module.exports = cursoRoutes;
