const express = require("express");
const DiscicursoController = require("../controllers/DiscicursoController");

const discicursoRoutes = express.Router();

const discicursoController = new DiscicursoController();

// Define a rota
discicursoRoutes.get("/discicurso", discicursoController.get);
discicursoRoutes.post("/discicurso", discicursoController.create);
discicursoRoutes.get("/discicurso/:id", discicursoController.getById);
discicursoRoutes.put("/discicurso/:id", discicursoController.update);
discicursoRoutes.delete("/discicurso/:id", discicursoController.delete);

// Exporta corretamente
module.exports = discicursoRoutes;
