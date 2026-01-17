const express = require("express");
const NotificacoesController = require("../controllers/NotificacoesController");

const notificacoesRoutes = express.Router();

const NotificacoesController = new NotificacoesController();

// Define a rota
notificacoesRoutes.get("/notificacoes", NotificacoesController.get);
notificacoesRoutes.post("/notificacoes", new NotificacoesController().create);
notificacoesRoutes.get(
  "/notificacoes/:id",
  new NotificacoesController().getById,
);
notificacoesRoutes.put(
  "/notificacoes/:id",
  new NotificacoesController().update,
);
notificacoesRoutes.delete(
  "/notificacoes/:id",
  new NotificacoesController().delete,
);

// Exporta corretamente
module.exports = notificacoesRoutes;
