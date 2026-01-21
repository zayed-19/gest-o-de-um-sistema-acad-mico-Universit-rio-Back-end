const express = require("express");
const CargoController = require("../controllers/CargoController");

const cargoRoutes = express.Router();

const cargoController = new CargoController();

// Define a rota
cargoRoutes.get("/cargo", cargoController.get);
cargoRoutes.post("/cargo", cargoController.create);
cargoRoutes.get("/cargo/:id", cargoController.getById);
cargoRoutes.put("/cargo/:id", cargoController.update);
cargoRoutes.delete("/cargo/:id", cargoController.delete);

// Exporta corretamente
module.exports = cargoRoutes;
