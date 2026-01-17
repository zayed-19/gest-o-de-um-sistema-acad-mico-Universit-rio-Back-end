const {
  getDisciprof,
  getDisciprofById,
  createDisciprof,
  updateDisciprof,
  deleteDisciprof,
} = require("../services/DisciprofService");

class DisciprofController {
  async get(req, res) {
    try {
      const result = await getDisciprof();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Disciprof" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getDisciprofById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Disciprof" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createDisciprof(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateDisciprof(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteDisciprof(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DisciprofController;
