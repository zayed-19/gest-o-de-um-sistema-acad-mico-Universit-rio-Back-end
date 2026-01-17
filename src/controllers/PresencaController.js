const {
  getPresenca,
  createPresenca,
  getPresencaById,
  updatePresenca,
  deletePresenca,
} = require("../services/PresencaService");

class PresencaController {
  async get(req, res) {
    try {
      const result = await getPresenca();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar presenca" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getPresencaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar presenca" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createPresenca(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updatePresenca(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deletePresenca(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PresencaController;
