const express = require("express");
const PresencaController = require("../controllers/PresencaController");

const presencaRoutes = express.Router();

const presencaController = new PresencaController();

// Define a rota
presencaRoutes.get("/presenca", presencaController.get);
presencaRoutes.post("/presenca", presencaController.create);
presencaRoutes.get("/presenca/:id", presencaController.getById);
presencaRoutes.put("/presenca/:id", presencaController.update);
presencaRoutes.delete("/presenca/:id", presencaController.delete);

// Exporta corretamente
module.exports = presencaRoutes;
