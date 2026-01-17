const express = require("express");
const DiscicursoController = require("../controllers/DiscicursoController");

const discicursoRoutes = express.Router();

const DiscicursoController = new DiscicursoController();

// Define a rota
discicursoRoutes.get("/discicurso", DiscicursoController.get);
discicursoRoutes.post("/discicurso", new DiscicursoController().create);
discicursoRoutes.get("/discicurso/:id", new DiscicursoController().getById);
discicursoRoutes.put("/discicurso/:id", new DiscicursoController().update);
discicursoRoutes.delete("/discicurso/:id", new DiscicursoController().delete);

// Exporta corretamente
module.exports = discicursoRoutes;
