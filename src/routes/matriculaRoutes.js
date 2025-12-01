const express = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const matriculaRoutes = express.Router()

matriculaRoutes.get('/matricula', new MatriculaController().get)
matriculaRoutes.post('/matricula', new MatriculaController().create)
matriculaRoutes.get('/matricula/:id', new MatriculaController().getById)
matriculaRoutes.put('/matricula/:id', new MatriculaController().update)
matriculaRoutes.delete('/matricula/:id', new MatriculaController().delete)

module.exports = matriculaRoutes;