const {
  getHistorico_matricula,
  getHistorico_matriculaById,
  createHistorico_matricula,
  updateHistorico_matricula,
  deleteHistorico_matricula,
} = require("../services/Historico_matriculaService");

class Historico_matriculaController {
  async get(req, res) {
    try {
      const result = await getHistorico_matricula();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar Histórico de matrícula" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getHistorico_matriculaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar Histórico de matrícula" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createHistorico_matricula(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateHistorico_matricula(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteHistorico_matricula(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Historico_matriculaController;
