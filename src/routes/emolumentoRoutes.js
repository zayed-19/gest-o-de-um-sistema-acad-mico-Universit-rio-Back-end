const express = require("express");
const EmolumentoController = require("../controllers/EmolumentoController");

const emolumentoRoutes = express.Router();

const EmolumentoController = new EmolumentoController();

// Define a rota
emolumentoRoutes.get("/emolumento", EmolumentoController.get);
emolumentoRoutes.post("/emolumento", new EmolumentoController().create);
emolumentoRoutes.get("/emolumento/:id", new EmolumentoController().getById);
emolumentoRoutes.put("/emolumento/:id", new EmolumentoController().update);
emolumentoRoutes.delete("/emolumento/:id", new EmolumentoController().delete);

// Exporta corretamente
module.exports = emolumentoRoutes;
