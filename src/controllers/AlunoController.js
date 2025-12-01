const { getAluno, createAluno, getAlunoById, updateAluno, deleteAluno } = require('../services/AlunoService');

class AlunoController {
  async get(req, res) {
    try {
      const result = await getAluno();
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Aluno' });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getAlunoById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Aluno' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body
      const result = await createAluno(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = req.body
      const result = await updateAluno(data, id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await deleteAluno(id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
}

module.exports = AlunoController;
