const {
  getFaculdade,
  getFaculdadeById,
  createFaculdade,
  updateFaculdade,
  deleteFaculdade,
} = require("../services/FaculdadesService");

class FaculdadesController {
  async get(req, res) {
    try {
      const result = await getFaculdade();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Faculdade" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getFaculdadeById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Faculdade" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createFaculdade(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateFaculdade(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteFaculdade(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = FaculdadesController;
