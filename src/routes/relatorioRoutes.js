const express = require('express')
const RelatorioController = require('../controllers/RelatorioController')

const relatorioRoutes = express.Router()

relatorioRoutes.get('/relatorio', new RelatorioController().get)
relatorioRoutes.post('/relatorio', new RelatorioController().create)
relatorioRoutes.get('/relatorio/:id', new RelatorioController().getById)
relatorioRoutes.put('/relatorio/:id', new RelatorioController().update)
relatorioRoutes.delete('/relatorio/:id', new RelatorioController().delete)

module.exports = relatorioRoutes;