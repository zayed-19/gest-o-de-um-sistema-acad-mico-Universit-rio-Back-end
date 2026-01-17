const {
  getItensFatura,
  createItensFatura,
  getItensFaturaById,
  updateItensFatura,
  deleteItensFatura,
} = require("../services/ItensFaturaService");

class ItensFaturaController {
  async get(req, res) {
    try {
      const result = await getItensFatura();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Itens de fatura" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getItensFaturaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Itens de fatura" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createItensFatura(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateItensFatura(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteItensFatura(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ItensFaturaController;
