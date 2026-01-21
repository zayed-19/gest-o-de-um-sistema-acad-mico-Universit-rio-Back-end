const express = require("express");
const FaculdadesController = require("../controllers/FaculdadesController");

const faculdadesRoutes = express.Router();

const faculdadesController = new FaculdadesController();

// Define a rota
faculdadesRoutes.get("/faculdades", faculdadesController.get);
faculdadesRoutes.post("/faculdades", faculdadesController.create);
faculdadesRoutes.get("/faculdades/:id", faculdadesController.getById);
faculdadesRoutes.put("/faculdades/:id", faculdadesController.update);
faculdadesRoutes.delete("/faculdades/:id", faculdadesController.delete);

// Exporta corretamente
module.exports = faculdadesRoutes;
