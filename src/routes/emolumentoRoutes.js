const express = require("express");
const EmolumentoController = require("../controllers/EmolumentoController");

const emolumentoRoutes = express.Router();

const emolumentoController = new EmolumentoController();

// Define a rota
emolumentoRoutes.get("/emolumento", emolumentoController.get);
emolumentoRoutes.post("/emolumento", emolumentoController.create);
emolumentoRoutes.get("/emolumento/:id", emolumentoController.getById);
emolumentoRoutes.put("/emolumento/:id", emolumentoController.update);
emolumentoRoutes.delete("/emolumento/:id", emolumentoController.delete);

// Exporta corretamente
module.exports = emolumentoRoutes;
