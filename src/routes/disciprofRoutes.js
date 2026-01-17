const express = require("express");
const DisciprofController = require("../controllers/DisciprofController");

const disciprofRoutes = express.Router();

const DisciprofController = new DisciprofController();

// Define a rota
disciprofRoutes.get("/disciprof", DisciprofController.get);
disciprofRoutes.post("/disciprof", new DisciprofController().create);
disciprofRoutes.get("/disciprof/:id", new DisciprofController().getById);
disciprofRoutes.put("/disciprof/:id", new DisciprofController().update);
disciprofRoutes.delete("/disciprof/:id", new DisciprofController().delete);

// Exporta corretamente
module.exports = disciprofRoutes;
