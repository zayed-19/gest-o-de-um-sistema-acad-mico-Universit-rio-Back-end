const express = require('express')
const historico_matriculaController = require('../controllers/historico_matriculaController')

const historico_matriculaRoutes = express.Router()

historico_matriculaRoutes.get('/historico_matricula', new historico_matriculaController().get)
historico_matriculaRoutes.post('/historico_matricula', new historico_matriculaController().create)
historico_matriculaRoutes.get('/historico_matricula/:id', new historico_matriculaController().getById)
historico_matriculaRoutes.put('/historico_matricula/:id', new historico_matriculaController().update)
historico_matriculaRoutes.delete('/historico_matricula/:id', new historico_matriculaController().delete)

module.exports = historico_matriculaRoutes;