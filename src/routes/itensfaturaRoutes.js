const express = require("express");
const ItensFaturaController = require("../controllers/ItensFaturaController");

const itensfaturaRoutes = express.Router();

const ItensFaturaController = new ItensFaturaController();

// Define a rota
itensfaturaRoutes.get("/itensfatura", ItensFaturaController.get);
itensfaturaRoutes.post("/itensfatura", new ItensFaturaController().create);
itensfaturaRoutes.get("/itensfatura/:id", new ItensFaturaController().getById);
itensfaturaRoutes.put("/itensfatura/:id", new ItensFaturaController().update);
itensfaturaRoutes.delete(
  "/itensfatura/:id",
  new ItensFaturaController().delete,
);

// Exporta corretamente
module.exports = itensfaturaRoutes;
