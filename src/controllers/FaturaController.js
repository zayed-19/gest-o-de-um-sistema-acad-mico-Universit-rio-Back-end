const {
  getFatura,
  getFaturaById,
  createFatura,
  updateFatura,
  deleteFatura,
} = require("../services/FaturaService");

class FaturaController {
  async get(req, res) {
    try {
      const result = await getFatura();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Fatura" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getFaturaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Fatura" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createFatura(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateFatura(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteFatura(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FaturaController;
