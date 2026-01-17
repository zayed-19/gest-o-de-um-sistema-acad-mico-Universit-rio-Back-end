const express = require("express");
const AvaliacaoController = require("../controllers/AvaliacaoController");

const avaliacaoRoutes = express.Router();

const AvaliacaoController = new AvaliacaoController();

// Define a rota
avaliacaoRoutes.get("/avaliacao", AvaliacaoController.get);
avaliacaoRoutes.post("/avaliacao", new AvaliacaoController().create);
avaliacaoRoutes.get("/avaliacao/:id", new AvaliacaoController().getById);
avaliacaoRoutes.put("/avaliacao/:id", new AvaliacaoController().update);
avaliacaoRoutes.delete("/avaliacao/:id", new AvaliacaoController().delete);

// Exporta corretamente
module.exports = avaliacaoRoutes;
