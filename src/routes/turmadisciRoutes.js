const express = require("express");
const TurmadisciController = require("../controllers/TurmadisciController");

const turmadisciRoutes = express.Router();

const TurmadisciController = new TurmadisciController();

// Define a rota
turmadisciRoutes.get("/turmadisci", TurmadisciController.get);
turmadisciRoutes.post("/turmadisci", new TurmadisciController().create);
turmadisciRoutes.get("/turmadisci/:id", new TurmadisciController().getById);
turmadisciRoutes.put("/turmadisci/:id", new TurmadisciController().update);
turmadisciRoutes.delete("/turmadisci/:id", new TurmadisciController().delete);

// Exporta corretamente
module.exports = turmadisciRoutes;
