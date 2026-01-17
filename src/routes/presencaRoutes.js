const express = require("express");
const PresencaController = require("../controllers/PresencaController");

const presencaRoutes = express.Router();

const PresencaController = new PresencaController();

// Define a rota
presencaRoutes.get("/presenca", PresencaController.get);
presencaRoutes.post("/presenca", new PresencaController().create);
presencaRoutes.get("/presenca/:id", new PresencaController().getById);
presencaRoutes.put("/presenca/:id", new PresencaController().update);
presencaRoutes.delete("/presenca/:id", new PresencaController().delete);

// Exporta corretamente
module.exports = presencaRoutes;
