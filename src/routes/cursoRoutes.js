const express = require("express");
const CursoController = require("../controllers/CursoController");

const cursoRoutes = express.Router();

const CursoController = new CursoController();

// Define a rota
cursoRoutes.get("/curso", CursoController.get);
cursoRoutes.post("/Curso", new CursoController().create);
cursoRoutes.get("/curso/:id", new CursoController().getById);
cursoRoutes.put("/curso/:id", new CursoController().update);
cursoRoutes.delete("/curso/:id", new CursoController().delete);

// Exporta corretamente
module.exports = cursoRoutes;
