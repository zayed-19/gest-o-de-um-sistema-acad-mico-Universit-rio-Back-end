const express = require("express");
const Historico_matriculaController = require("../controllers/Historico_matriculaController");

const historico_matriculaRoutes = express.Router();

const Historico_matriculaController = new Historico_matriculaController();

// Define a rota
historico_matriculaRoutes.get(
  "/historico_matricula",
  Historico_matriculaController.get,
);
historico_matriculaRoutes.post(
  "/historico_matricula",
  new Historico_matriculaController().create,
);
historico_matriculaRoutes.get(
  "/historico_matricula/:id",
  new Historico_matriculaController().getById,
);
historico_matriculaRoutes.put(
  "/historico_matricula/:id",
  new Historico_matriculaController().update,
);
historico_matriculaRoutes.delete(
  "/historico_matricula/:id",
  new Historico_matriculaController().delete,
);

// Exporta corretamente
module.exports = historico_matriculaRoutes;
