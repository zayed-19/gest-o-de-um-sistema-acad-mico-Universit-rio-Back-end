const express = require('express')
const AvaliacaoController = require('../controllers/AvaliacaoController')

const avaliacaoRoutes = express.Router()

avaliacaoRoutes.get('/avaliacao', new AvaliacaoController().get)
avaliacaoRoutes.post('/avalicao', new AvaliacaoController().create)
avaliacaoRoutes.get('/avaliacao/:id', new AvaliacaoController().getById)
avaliacaoRoutes.put('/avalicao/:id', new AvaliacaoController().update)
avaliacaoRoutes.delete('/estudante/:id', new AvaliacaoController().delete)

module.exports = avaliacaoRoutes;
