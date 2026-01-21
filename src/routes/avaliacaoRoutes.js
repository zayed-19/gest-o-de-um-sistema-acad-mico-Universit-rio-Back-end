const express = require("express");
const AvaliacaoController = require("../controllers/AvaliacaoController");

const avaliacaoRoutes = express.Router();

const avaliacaoController = new AvaliacaoController();

// Define a rota
avaliacaoRoutes.get("/avaliacao", avaliacaoController.get);
avaliacaoRoutes.post("/avaliacao", avaliacaoController.create);
avaliacaoRoutes.get("/avaliacao/:id", avaliacaoController.getById);
avaliacaoRoutes.put("/avaliacao/:id", avaliacaoController.update);
avaliacaoRoutes.delete("/avaliacao/:id", avaliacaoController.delete);

// Exporta corretamente
module.exports = avaliacaoRoutes;
