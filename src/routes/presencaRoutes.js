const express = require('express')
const PresencaController = require('../controllers/PresencaController')

const presencaRoutes = express.Router()

presencaRoutes.get('/presenca', new PresencaController().get)
presencaRoutes.post('/presenca', new PresencaController().create)
presencaRoutes.get('/presenca/:id', new PresencaController().getById)
presencaRoutes.put('/presenca/:id', new PresencaController().update)
presencaRoutes.delete('/presenca/:id', new PresencaController().delete)

module.exports = presencaRoutes;

