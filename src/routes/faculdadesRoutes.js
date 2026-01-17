const express = require("express");
const FaculdadesController = require("../controllers/FaculdadesController");

const faculdadesRoutes = express.Router();

const FaculdadesController = new FaculdadesController();

// Define a rota
faculdadesRoutes.get("/faculdades", FaculdadesController.get);
faculdadesRoutes.post("/faculdades", new FaculdadesController().create);
faculdadesRoutes.get("/faculdades/:id", new FaculdadesController().getById);
faculdadesRoutes.put("/faculdades/:id", new FaculdadesController().update);
faculdadesRoutes.delete("/faculdades/:id", new FaculdadesController().delete);

// Exporta corretamente
module.exports = faculdadesRoutes;
