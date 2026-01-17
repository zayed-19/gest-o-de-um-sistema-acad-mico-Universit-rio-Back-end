const express = require("express");
const CargoController = require("../controllers/CargoController");

const cargoRoutes = express.Router();

const CargoController = new CargoController();

// Define a rota
cargoRoutes.get("/cargo", CargoController.get);
cargoRoutes.post("/cargo", new CargoController().create);
cargoRoutes.get("/cargo/:id", new CargoController().getById);
cargoRoutes.put("/cargo/:id", new CargoController().update);
cargoRoutes.delete("/cargo/:id", new CargoController().delete);

// Exporta corretamente
module.exports = cargoRoutes;
