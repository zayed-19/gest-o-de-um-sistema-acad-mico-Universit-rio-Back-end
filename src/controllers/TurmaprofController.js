const {
  getTurmaprof,
  createTurmaprof,
  getTurmaprofById,
  updateTurmaprof,
  deleteTurmaprof,
} = require("../services/TurmaprofService");

class TurmaprofController {
  async get(req, res) {
    try {
      const result = await getTurmaprof();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Turmaprof" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getTurmaprofById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Turmaprof" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createTurmaprof(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateTurmaprof(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteTurmaprof(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TurmaprofController;
