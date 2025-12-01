const express = require('express')
const PagamentoController = require('../controllers/PagamentoController')

const pagamentoRoutes = express.Router()

pagamentoRoutes.get('/pagamento', new PagamentoController().get)
pagamentoRoutes.post('/pagamento', new PagamentoController().create)
pagamentoRoutes.get('/pagamento/:id', new PagamentoController().getById)
pagamentoRoutes.put('/pagamento/:id', new PagamentoController().update)
pagamentoRoutes.delete('/pagamento/:id', new PagamentoController().delete)

module.exports = pagamentoRoutes;