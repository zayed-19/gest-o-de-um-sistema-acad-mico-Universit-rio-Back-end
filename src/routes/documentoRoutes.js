const express = require("express");
const DocumentoController = require("../controllers/DocumentoController");

const documentoRoutes = express.Router();

const DocumentoController = new DocumentoController();

// Define a rota
documentoRoutes.get("/documento", DocumentoController.get);
documentoRoutes.post("/documento", new DocumentoController().create);
documentoRoutes.get("/documento/:id", new DocumentoController().getById);
documentoRoutes.put("/documento/:id", new DocumentoController().update);
documentoRoutes.delete("/documento/:id", new DocumentoController().delete);

// Exporta corretamente
module.exports = documentoRoutes;
