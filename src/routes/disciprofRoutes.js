const express = require("express");
const DisciprofController = require("../controllers/DisciprofController");

const disciprofRoutes = express.Router();

const disciprofController = new DisciprofController();

// Define a rota
disciprofRoutes.get("/disciprof", disciprofController.get);
disciprofRoutes.post("/disciprof", disciprofController.create);
disciprofRoutes.get("/disciprof/:id", disciprofController.getById);
disciprofRoutes.put("/disciprof/:id", disciprofController.update);
disciprofRoutes.delete("/disciprof/:id", disciprofController.delete);

// Exporta corretamente
module.exports = disciprofRoutes;
