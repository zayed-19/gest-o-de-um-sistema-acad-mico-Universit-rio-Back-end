const express = require('express')
const ReciboController = require('../controllers/ReciboController')

const reciboRoutes = express.Router()

reciboRoutes.get('/recibo', new ReciboController().get)
reciboRoutes.post('/recibo', new ReciboController().create)
reciboRoutes.get('/recibo/:id', new ReciboController().getById)
reciboRoutes.put('/recibo/:id', new ReciboController().update)
reciboRoutes.delete('/recibo/:id', new ReciboController().delete)

module.exports = reciboRoutes;