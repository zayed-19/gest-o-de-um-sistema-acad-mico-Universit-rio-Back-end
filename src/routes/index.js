const express = require('express')
const AlunoController = require('../controllers/AlunoController')
const alunoRoutes = express.Router()

alunoRoutes.get('/estudante', new AlunoController().get)
alunoRoutes.post('/estudante', new AlunoController().create)
alunoRoutes.get('/estudante/:id', new AlunoController().getById)
alunoRoutes.put('/estudante/:id', new AlunoController().update)
alunoRoutes.delete('/estudante/:id', new AlunoController().delete)

const express = require('express')
const AvaliacaoController = require('../controllers/AvaliacaoController')

const avaliacaoRoutes = express.Router()

avaliacaoRoutes.get('/avaliacao', new AvaliacaoController().get)
avaliacaoRoutes.post('/avalicao', new AvaliacaoController().create)
avaliacaoRoutes.get('/avaliacao/:id', new AvaliacaoController().getById)
avaliacaoRoutes.put('/avalicao/:id', new AvaliacaoController().update)
avaliacaoRoutes.delete('/estudante/:id', new AvaliacaoController().delete)


const express = require('express')
const CargoController = require('../controllers/CargoController')

const cargoRoutes = express.Router()

cargoRoutes.get('/avaliacao', new CargoController().get)
cargoRoutes.post('/avalicao', new CargoController().create)
cargoRoutes.get('/avaliacao/:id', new CargoController().getById)
cargoRoutes.put('/avalicao/:id', new CargoController().update)
cargoRoutes.delete('/estudante/:id', new CargoController().delete)

const express = require('express')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = express.Router()

cursoRoutes.get('/avaliacao', new CursoController().get)
cursoRoutes.post('/avalicao', new CursoController().create)
cursoRoutes.get('/avaliacao/:id', new CursoController().getById)
cursoRoutes.put('/avalicao/:id', new CursoController().update)
cursoRoutes.delete('/estudante/:id', new CursoController().delete)


const express = require('express')
const disciplinaController = require('../controllers/DisciplinaController')

const disciplinaRoutes = express.Router()

disciplinaRoutes.get('/avaliacao', new disciplinaController().get)
disciplinaRoutes.post('/avalicao', new disciplinaController().create)
disciplinaRoutes.get('/avaliacao/:id', new disciplinaController().getById)
disciplinaRoutes.put('/avalicao/:id', new disciplinaController().update)
disciplinaRoutes.delete('/estudante/:id', new disciplinaController().delete)

const express = require('express')
const documentoController = require('../controllers/DocumentoController')

const documentoRoutes = express.Router()

documentoRoutes.get('/documento', new documentoController().get)
documentoRoutes.post('/documento', new documentoController().create)
documentoRoutes.get('/documento/:id', new documentoController().getById)
documentoRoutes.put('/documento/:id', new documentoController().update)
documentoRoutes.delete('/documento/:id', new documentoController().delete)

const express = require('express')
const FaculdadesController = require('../controllers/FaculdadesController')

const faculdadesRoutes = express.Router()

faculdadesRoutes.get('/faculdades', new FaculdadesController().get)
faculdadesRoutes.post('/faculdades', new FaculdadesController().create)
faculdadesRoutes.get('/faculdades/:id', new FaculdadesController().getById)
faculdadesRoutes.put('/faculdades/:id', new FaculdadesController().update)
faculdadesRoutes.delete('/faculdades/:id', new FaculdadesController().delete)

const express = require('express')
const FaturaController = require('../controllers/FaturaController')

const faturaRoutes = express.Router()

faturaRoutes.get('/fatura', new FaturaController().get)
faturaRoutes.post('/fatura', new FaturaController().create)
faturaRoutes.get('/fatura/:id', new FaturaController().getById)
faturaRoutes.put('/fatura/:id', new FaturaController().update)
faturaRoutes.delete('/fatura/:id', new FaturaController().delete)

const express = require('express')
const historico_matriculaController = require('../controllers/historico_matriculaController')

const historico_matriculaRoutes = express.Router()

historico_matriculaRoutes.get('/historico_matricula', new historico_matriculaController().get)
historico_matriculaRoutes.post('/historico_matricula', new historico_matriculaController().create)
historico_matriculaRoutes.get('/historico_matricula/:id', new historico_matriculaController().getById)
historico_matriculaRoutes.put('/historico_matricula/:id', new historico_matriculaController().update)
historico_matriculaRoutes.delete('/historico_matricula/:id', new historico_matriculaController().delete)

const express = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const matriculaRoutes = express.Router()

matriculaRoutes.get('/matricula', new MatriculaController().get)
matriculaRoutes.post('/matricula', new MatriculaController().create)
matriculaRoutes.get('/matricula/:id', new MatriculaController().getById)
matriculaRoutes.put('/matricula/:id', new MatriculaController().update)
matriculaRoutes.delete('/matricula/:id', new MatriculaController().delete)


const express = require('express')
const MonumentoController = require('../controllers/MonumentoController')

const monumentoRoutes = express.Router()

monumentoRoutes.get('/monumento', new MonumentoController().get)
monumentoRoutes.post('/monumento', new MonumentoController().create)
monumentoRoutes.get('/monumento/:id', new MonumentoController().getById)
monumentoRoutes.put('/monumento/:id', new MonumentoController().update)
monumentoRoutes.delete('/monumento/:id', new MonumentoController().delete)

const express = require('express')
const MultiplaController = require('../controllers/MultiplaController')

const multiplaRoutes = express.Router()

multiplaRoutes.get('/multipla', new MultiplaController().get)
multiplaRoutes.post('/multipla', new MultiplaController().create)
multiplaRoutes.get('/multipla/:id', new MultiplaController().getById)
multiplaRoutes.put('/multipla/:id', new MultiplaController().update)
multiplaRoutes.delete('/multipla/:id', new MultiplaController().delete)

const express = require('express')
const NotificacaoController = require('../controllers/NotificacaoController')

const notificacaoRoutes = express.Router()

notificacaoRoutes.get('/notificacao', new NotificacaoController().get)
notificacaoRoutes.post('/notificacao', new NotificacaoController().create)
notificacaoRoutes.get('/notificacao/:id', new NotificacaoController().getById)
notificacaoRoutes.put('/notificacao/:id', new NotificacaoController().update)
notificacaoRoutes.delete('/notificacao/:id', new NotificacaoController().delete)

const express = require('express')
const PagamentoController = require('../controllers/PagamentoController')

const pagamentoRoutes = express.Router()

pagamentoRoutes.get('/pagamento', new PagamentoController().get)
pagamentoRoutes.post('/pagamento', new PagamentoController().create)
pagamentoRoutes.get('/pagamento/:id', new PagamentoController().getById)
pagamentoRoutes.put('/pagamento/:id', new PagamentoController().update)
pagamentoRoutes.delete('/pagamento/:id', new PagamentoController().delete)

const express = require('express')
const PresencaController = require('../controllers/PresencaController')

const presencaRoutes = express.Router()

presencaRoutes.get('/presenca', new PresencaController().get)
presencaRoutes.post('/presenca', new PresencaController().create)
presencaRoutes.get('/presenca/:id', new PresencaController().getById)
presencaRoutes.put('/presenca/:id', new PresencaController().update)
presencaRoutes.delete('/presenca/:id', new PresencaController().delete)


const express = require('express')
const ProfessorController = require('../controllers/ProfessorController')

const professorRoutes = express.Router()

professorRoutes.get('/professor', new ProfessorController().get)
professorRoutes.post('/professor', new ProfessorController().create)
professorRoutes.get('/professor/:id', new ProfessorController().getById)
professorRoutes.put('/professor/:id', new ProfessorController().update)
professorRoutes.delete('/professor/:id', new ProfessorController().delete)

const express = require('express')
const ReciboController = require('../controllers/ReciboController')

const reciboRoutes = express.Router()

reciboRoutes.get('/recibo', new ReciboController().get)
reciboRoutes.post('/recibo', new ReciboController().create)
reciboRoutes.get('/recibo/:id', new ReciboController().getById)
reciboRoutes.put('/recibo/:id', new ReciboController().update)
reciboRoutes.delete('/recibo/:id', new ReciboController().delete)

const express = require('express')
const RelatorioController = require('../controllers/RelatorioController')

const relatorioRoutes = express.Router()

relatorioRoutes.get('/relatorio', new RelatorioController().get)
relatorioRoutes.post('/relatorio', new RelatorioController().create)
relatorioRoutes.get('/relatorio/:id', new RelatorioController().getById)
relatorioRoutes.put('/relatorio/:id', new RelatorioController().update)
relatorioRoutes.delete('/relatorio/:id', new RelatorioController().delete)


const express = require('express')
const TurmaController = require('../controllers/TurmaController')

const turmaRoutes = express.Router()

turmaRoutes.get('/turma', new TurmaController().get)
turmaRoutes.post('/turma', new TurmaController().create)
turmaRoutes.get('/turma/:id', new TurmaController().getById)
turmaRoutes.put('/turma/:id', new TurmaController().update)
turmaRoutes.delete('/turma/:id', new TurmaController().delete)

module.exports = {
    alunoRoutes,
    avaliacaoRoutes,
    cargoRoutes,
    cursoRoutes,
    disciplinaRoutes,
    documentoRoutes,
    faculdadesRoutes,
    faturaRoutes,
    historico_matriculaRoutes,
    matriculaRoutes,
    monumentoRoutes,
    multiplaRoutes,
    notificacaoRoutes,
    pagamentoRoutes,
    presencaRoutes,
    professorRoutes,
    reciboRoutes,
    relatorioRoutes,
    turmaRoutes
};