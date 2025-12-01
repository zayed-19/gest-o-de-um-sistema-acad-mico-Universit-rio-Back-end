const express = require('express')
const FaculdadesController = require('../controllers/FaculdadesController')

const faculdadesRoutes = express.Router()

faculdadesRoutes.get('/faculdades', new FaculdadesController().get)
faculdadesRoutes.post('/faculdades', new FaculdadesController().create)
faculdadesRoutes.get('/faculdades/:id', new FaculdadesController().getById)
faculdadesRoutes.put('/faculdades/:id', new FaculdadesController().update)
faculdadesRoutes.delete('/faculdades/:id', new FaculdadesController().delete)

module.exports = faculdadesRoutes;