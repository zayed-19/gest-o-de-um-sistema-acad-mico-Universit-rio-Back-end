const express = require('express')
const TurmaController = require('../controllers/TurmaController')

const turmaRoutes = express.Router()

turmaRoutes.get('/turma', new TurmaController().get)
turmaRoutes.post('/turma', new TurmaController().create)
turmaRoutes.get('/turma/:id', new TurmaController().getById)
turmaRoutes.put('/turma/:id', new TurmaController().update)
turmaRoutes.delete('/turma/:id', new TurmaController().delete)

module.exports = turmaRoutes;