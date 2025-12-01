const express = require('express')
const FaturaController = require('../controllers/FaturaController')

const faturaRoutes = express.Router()

faturaRoutes.get('/fatura', new FaturaController().get)
faturaRoutes.post('/fatura', new FaturaController().create)
faturaRoutes.get('/fatura/:id', new FaturaController().getById)
faturaRoutes.put('/fatura/:id', new FaturaController().update)
faturaRoutes.delete('/fatura/:id', new FaturaController().delete)

module.exports = faturaRoutes;