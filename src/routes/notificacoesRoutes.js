const express = require("express");
const NotificacoesController = require("../controllers/NotificacoesController");

const notificacoesRoutes = express.Router();

const notificacoesController = new NotificacoesController();

// Define a rota
notificacoesRoutes.get("/notificacoes", notificacoesController.get);
notificacoesRoutes.post("/notificacoes", notificacoesController.create);
notificacoesRoutes.get("/notificacoes/:id", notificacoesController.getById);
notificacoesRoutes.put("/notificacoes/:id", notificacoesController.update);
notificacoesRoutes.delete("/notificacoes/:id", notificacoesController.delete);

// Exporta corretamente
module.exports = notificacoesRoutes;
