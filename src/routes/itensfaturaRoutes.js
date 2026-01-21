const express = require("express");
const ItensFaturaController = require("../controllers/ItensFaturaController");

const itensfaturaRoutes = express.Router();

const itensFaturaController = new ItensFaturaController();

// Define a rota
itensfaturaRoutes.get("/itensfatura", itensFaturaController.get);
itensfaturaRoutes.post("/itensfatura", itensFaturaController.create);
itensfaturaRoutes.get("/itensfatura/:id", itensFaturaController.getById);
itensfaturaRoutes.put("/itensfatura/:id", itensFaturaController.update);
itensfaturaRoutes.delete("/itensfatura/:id", itensFaturaController.delete);

// Exporta corretamente
module.exports = itensfaturaRoutes;
