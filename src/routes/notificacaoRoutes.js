const express = require('express')
const NotificacaoController = require('../controllers/NotificacaoController')

const notificacaoRoutes = express.Router()

notificacaoRoutes.get('/notificacao', new NotificacaoController().get)
notificacaoRoutes.post('/notificacao', new NotificacaoController().create)
notificacaoRoutes.get('/notificacao/:id', new NotificacaoController().getById)
notificacaoRoutes.put('/notificacao/:id', new NotificacaoController().update)
notificacaoRoutes.delete('/notificacao/:id', new NotificacaoController().delete)

module.exports = notificacaoRoutes;