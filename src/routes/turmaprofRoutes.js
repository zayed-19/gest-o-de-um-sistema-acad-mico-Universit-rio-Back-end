const express = require("express");
const TurmaprofController = require("../controllers/TurmaprofController");

const turmaprofRoutes = express.Router();

const turmaprofController = new TurmaprofController();

// Define a rota
turmaprofRoutes.get("/turmaprof", turmaprofController.get);
turmaprofRoutes.post("/turmaprof", turmaprofController.create);
turmaprofRoutes.get("/turmaprof/:id", turmaprofController.getById);
turmaprofRoutes.put("/turmaprof/:id", turmaprofController.update);
turmaprofRoutes.delete("/turmaprof/:id", turmaprofController.delete);

// Exporta corretamente
module.exports = turmaprofRoutes;
