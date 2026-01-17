const express = require("express");
const FaturaController = require("../controllers/FaturaController");

const faturaRoutes = express.Router();

const FaturaController = new FaturaController();

// Define a rota
faturaRoutes.get("/fatura", FaturaController.get);
faturaRoutes.post("/fatura", new FaturaController().create);
faturaRoutes.get("/fatura/:id", new FaturaController().getById);
faturaRoutes.put("/fatura/:id", new FaturaController().update);
faturaRoutes.delete("/fatura/:id", new FaturaController().delete);

// Exporta corretamente
module.exports = faturaRoutes;
