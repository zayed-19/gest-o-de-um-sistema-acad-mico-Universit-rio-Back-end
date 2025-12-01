const express = require('express')
const CargoController = require('../controllers/CargoController')

const cargoRoutes = express.Router()

cargoRoutes.get('/avaliacao', new CargoController().get)
cargoRoutes.post('/avalicao', new CargoController().create)
cargoRoutes.get('/avaliacao/:id', new CargoController().getById)
cargoRoutes.put('/avalicao/:id', new CargoController().update)
cargoRoutes.delete('/estudante/:id', new CargoController().delete)

module.exports = cargoRoutes;

