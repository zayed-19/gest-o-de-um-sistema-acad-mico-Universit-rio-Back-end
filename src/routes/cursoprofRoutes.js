const express = require("express");
const CursoprofController = require("../controllers/CursoprofController");

const cursoprofRoutes = express.Router();

const cursoprofController = new CursoprofController();

// Define a rota
cursoprofRoutes.get("/cursoprof", cursoprofController.get);
cursoprofRoutes.post("/cursoprof", cursoprofController.create);
cursoprofRoutes.get("/cursoprof/:id", cursoprofController.getById);
cursoprofRoutes.put("/cursoprof/:id", cursoprofController.update);
cursoprofRoutes.delete("/cursoprof/:id", cursoprofController.delete);

// Exporta corretamente
module.exports = cursoprofRoutes;
