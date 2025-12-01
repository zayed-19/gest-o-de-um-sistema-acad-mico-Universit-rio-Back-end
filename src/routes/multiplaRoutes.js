const express = require('express')
const MultiplaController = require('../controllers/MultiplaController')

const multiplaRoutes = express.Router()

multiplaRoutes.get('/multipla', new MultiplaController().get)
multiplaRoutes.post('/multipla', new MultiplaController().create)
multiplaRoutes.get('/multipla/:id', new MultiplaController().getById)
multiplaRoutes.put('/multipla/:id', new MultiplaController().update)
multiplaRoutes.delete('/multipla/:id', new MultiplaController().delete)

module.exports = multiplaRoutes;