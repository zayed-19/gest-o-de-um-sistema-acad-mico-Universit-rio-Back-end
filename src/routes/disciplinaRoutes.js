const express = require('express')
const disciplinaController = require('../controllers/DisciplinaController')

const disciplinaRoutes = express.Router()

disciplinaRoutes.get('/avaliacao', new disciplinaController().get)
disciplinaRoutes.post('/avalicao', new disciplinaController().create)
disciplinaRoutes.get('/avaliacao/:id', new disciplinaController().getById)
disciplinaRoutes.put('/avalicao/:id', new disciplinaController().update)
disciplinaRoutes.delete('/estudante/:id', new disciplinaController().delete)

module.exports = disciplinaRoutes;
