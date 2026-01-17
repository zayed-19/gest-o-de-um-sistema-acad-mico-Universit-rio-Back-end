const {
  getTurma,
  createTurma,
  getTurmaById,
  updateTurma,
  deleteTurma,
} = require("../services/TurmaService");

class TurmaController {
  async get(req, res) {
    try {
      const result = await getTurma();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Turma" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getTurmaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Turma" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createTurma(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateTurma(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteTurma(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TurmaController;
