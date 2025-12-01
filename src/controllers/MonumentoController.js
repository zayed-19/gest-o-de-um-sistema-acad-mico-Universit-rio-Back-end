const { getMonumento, createMonumento, getMonumentoById, updateMonumento, deleteMonumento } = require('../services/MonumentoService');

class MonumentoController {
  async get(req, res) {
    try {
        const result = await getMonumento();
            return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Monumento' });
    }
}

    async getById(req, res) {
    try {
      const id = Number(req.params.id)
        const result = await getMonumentoById(id);
            return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Monumento' });
    }
}

    async create(req, res) {
    try {
      const data = req.body
        const result = await createMonumento(data)
            return res.status(201).json(result)
    } catch (error) {
      console.log(error)
    }
}
    async update(req, res) {
    try {
      const id = Number(req.params.id)
        const data = req.body
        const result = await updateMonumento(data, id)
            return res.status(201).json(result)
    } catch (error) {
      console.log(error)
    }
}
    async delete(req, res) {
    try {
      const id = Number(req.params.id)
        const result = await deleteMonumento(id)
            return res.status(201).json(result)
    } catch (error) {
      console.log(error)
    }
}

}

module.exports = MonumentoController;

