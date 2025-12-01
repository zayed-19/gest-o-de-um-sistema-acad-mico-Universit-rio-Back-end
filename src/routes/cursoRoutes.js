const express = require('express')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = express.Router()

cursoRoutes.get('/avaliacao', new CursoController().get)
cursoRoutes.post('/avalicao', new CursoController().create)
cursoRoutes.get('/avaliacao/:id', new CursoController().getById)
cursoRoutes.put('/avalicao/:id', new CursoController().update)
cursoRoutes.delete('/estudante/:id', new CursoController().delete)

module.exports = cursoRoutes;