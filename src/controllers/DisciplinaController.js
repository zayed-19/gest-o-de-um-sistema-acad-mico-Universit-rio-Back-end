const {
  getDisciplina,
  getDisciplinaById,
  createDisciplina,
  updateDisciplina,
  deleteDisciplina,
} = require("../services/DisciplinaService");

class DisciplinaController {
  async get(req, res) {
    try {
      const result = await getDisciplina();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Disciplina" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getDisciplinaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Disciplina" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createDisciplina(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateDisciplina(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteDisciplina(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DisciplinaController;
