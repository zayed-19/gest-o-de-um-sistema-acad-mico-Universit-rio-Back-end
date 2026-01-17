const express = require("express");
const TurmaprofController = require("../controllers/TurmaprofController");

const turmaprofRoutes = express.Router();

const TurmaprofController = new TurmaprofController();

// Define a rota
turmaprofRoutes.get("/turmaprof", TurmaprofController.get);
turmaprofRoutes.post("/turmaprof", new TurmaprofController().create);
turmaprofRoutes.get("/turmaprof/:id", new TurmaprofController().getById);
turmaprofRoutes.put("/turmaprof/:id", new TurmaprofController().update);
turmaprofRoutes.delete("/turmaprof/:id", new TurmaprofController().delete);

// Exporta corretamente
module.exports = turmaprofRoutes;
