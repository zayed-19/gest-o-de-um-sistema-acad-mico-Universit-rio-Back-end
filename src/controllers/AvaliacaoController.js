const { getAvaliacao, createAvaliacao, getAvaliacaoById, getAvaliacaoById, updateAvaliacao, deleteAvaliacao } = require('../services/AvaliacaoService');

class AvaliacaoController {
  async get(req, res) {
    try {
      const result = await getAvaliacao();
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Avaliação' });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getAvaliacaoById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Avaliação' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body
      const result = await createAvaliacao(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = req.body
      const result = await updateAvaliacao(data, id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await deleteAvaliacao(id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
}

module.exports = AvaliacaoController;
