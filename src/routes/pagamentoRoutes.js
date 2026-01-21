const express = require("express");
const PagamentoController = require("../controllers/PagamentoController");

const pagamentoRoutes = express.Router();

const pagamentoController = new PagamentoController();

// Define a rota
pagamentoRoutes.get("/pagamento", pagamentoController.get);
pagamentoRoutes.post("/pagamento", pagamentoController.create);
pagamentoRoutes.get("/pagamento/:id", pagamentoController.getById);
pagamentoRoutes.put("/pagamento/:id", pagamentoController.update);
pagamentoRoutes.delete("/pagamento/:id", pagamentoController.delete);

// Exporta corretamente
module.exports = pagamentoRoutes;
