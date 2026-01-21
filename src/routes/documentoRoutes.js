const express = require("express");
const DocumentoController = require("../controllers/DocumentoController");

const documentoRoutes = express.Router();

const documentoController = new DocumentoController();

// Define a rota
documentoRoutes.get("/documento", documentoController.get);
documentoRoutes.post("/documento", documentoController.create);
documentoRoutes.get("/documento/:id", documentoController.getById);
documentoRoutes.put("/documento/:id", documentoController.update);
documentoRoutes.delete("/documento/:id", documentoController.delete);

// Exporta corretamente
module.exports = documentoRoutes;
