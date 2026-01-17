const {
  getProfessor,
  createProfessor,
  getProfessorById,
  updateProfessor,
  deleteProfessor,
} = require("../services/ProfessorService");

class ProfessorController {
  async get(req, res) {
    try {
      const result = await getProfessor();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar professor" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getProfessorById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar professor" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createProfessor(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateProfessor(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteProfessor(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProfessorController;
