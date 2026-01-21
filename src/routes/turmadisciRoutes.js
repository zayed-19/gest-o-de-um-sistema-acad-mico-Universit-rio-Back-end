const express = require("express");
const TurmadisciController = require("../controllers/TurmadisciController");

const turmadisciRoutes = express.Router();

const turmadisciController = new TurmadisciController();

// Define a rota
turmadisciRoutes.get("/turmadisci", turmadisciController.get);
turmadisciRoutes.post("/turmadisci", turmadisciController.create);
turmadisciRoutes.get("/turmadisci/:id", turmadisciController.getById);
turmadisciRoutes.put("/turmadisci/:id", turmadisciController.update);
turmadisciRoutes.delete("/turmadisci/:id", turmadisciController.delete);

// Exporta corretamente
module.exports = turmadisciRoutes;
