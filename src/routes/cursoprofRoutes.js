const express = require("express");
const CursoprofController = require("../controllers/CursoprofController");

const cursoprofRoutes = express.Router();

const CursoprofController = new CursoprofController();

// Define a rota
cursoprofRoutes.get("/cursoprof", CursoprofController.get);
cursoprofRoutes.post("/cursoprof", new CursoprofController().create);
cursoprofRoutes.get("/cursoprof/:id", new CursoprofController().getById);
cursoprofRoutes.put("/cursoprof/:id", new CursoprofController().update);
cursoprofRoutes.delete("/cursoprof/:id", new CursoprofController().delete);

// Exporta corretamente
module.exports = cursoprofRoutes;
