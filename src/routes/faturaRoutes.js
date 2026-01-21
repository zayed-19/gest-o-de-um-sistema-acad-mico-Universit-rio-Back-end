const express = require("express");
const FaturaController = require("../controllers/FaturaController");

const faturaRoutes = express.Router();

const faturaController = new FaturaController();

// Define a rota
faturaRoutes.get("/fatura", faturaController.get);
faturaRoutes.post("/fatura", faturaController.create);
faturaRoutes.get("/fatura/:id", faturaController.getById);
faturaRoutes.put("/fatura/:id", faturaController.update);
faturaRoutes.delete("/fatura/:id", faturaController.delete);

// Exporta corretamente
module.exports = faturaRoutes;
