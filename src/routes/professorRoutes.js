const express = require('express')
const ProfessorController = require('../controllers/ProfessorController')

const professorRoutes = express.Router()

professorRoutes.get('/professor', new ProfessorController().get)
professorRoutes.post('/professor', new ProfessorController().create)
professorRoutes.get('/professor/:id', new ProfessorController().getById)
professorRoutes.put('/professor/:id', new ProfessorController().update)
professorRoutes.delete('/professor/:id', new ProfessorController().delete)

module.exports = professorRoutes;

