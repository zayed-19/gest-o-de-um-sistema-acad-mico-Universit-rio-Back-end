const express = require('express')
const AlunoController = require('../controllers/AlunoController')
const alunoRoutes = express.Router()

alunoRoutes.get('/estudante', new AlunoController().get)
alunoRoutes.post('/estudante', new AlunoController().create)
alunoRoutes.get('/estudante/:id', new AlunoController().getById)
alunoRoutes.put('/estudante/:id', new AlunoController().update)
alunoRoutes.delete('/estudante/:id', new AlunoController().delete)

module.exports = alunoRoutes;