const express = require('express')
const documentoController = require('../controllers/DocumentoController')

const documentoRoutes = express.Router()

documentoRoutes.get('/documento', new documentoController().get)
documentoRoutes.post('/documento', new documentoController().create)
documentoRoutes.get('/documento/:id', new documentoController().getById)
documentoRoutes.put('/documento/:id', new documentoController().update)
documentoRoutes.delete('/documento/:id', new documentoController().delete)

module.exports = documentoRoutes;