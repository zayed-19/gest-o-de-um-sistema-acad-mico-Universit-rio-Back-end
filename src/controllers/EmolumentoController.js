const {
  getEmolumento,
  createEmolumento,
  getEmolumentoById,
  updateEmolumento,
  deleteEmolumento,
} = require("../services/EmolumentoService");

class EmolumentoController {
  async get(req, res) {
    try {
      const result = await getEmolumento();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Emolumento" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getEmolumentoById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Emolumento" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createEmolumento(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateEmolumento(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteEmolumento(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EmolumentoController;
