const { getCurso, createCurso, getCursoById, updateCurso, deleteCurso } = require('../services/CursoService');

class CursoController {
  async get(req, res) {
    try {
      const result = await getCurso();
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Curso' });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getCursoById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Curso' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body
      const result = await createCurso(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = req.body
      const result = await updateCurso(data, id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await deleteCurso(id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
}

module.exports = CursoController;
