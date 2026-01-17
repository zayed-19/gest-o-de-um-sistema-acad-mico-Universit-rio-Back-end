const {
  getTurmadisci,
  createTurmadisci,
  getTurmadisciById,
  updateTurmadisci,
  deleteTurmadisci,
} = require("../services/TurmadisciService");

class TurmadisciController {
  async get(req, res) {
    try {
      const result = await getTurmadisci();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Turmadisci" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getTurmadisciById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Turmadisci" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createTurmadisci(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateTurmadisci(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteTurmadisci(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TurmadisciController;
