const express = require('express')
const MonumentoController = require('../controllers/MonumentoController')

const monumentoRoutes = express.Router()

monumentoRoutes.get('/monumento', new MonumentoController().get)
monumentoRoutes.post('/monumento', new MonumentoController().create)
monumentoRoutes.get('/monumento/:id', new MonumentoController().getById)
monumentoRoutes.put('/monumento/:id', new MonumentoController().update)
monumentoRoutes.delete('/monumento/:id', new MonumentoController().delete)

module.exports = monumentoRoutes;