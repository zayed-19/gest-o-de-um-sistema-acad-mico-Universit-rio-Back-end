const {
  getMatricula,
  getMatriculaById,
  createMatricula,
  deleteMatricula,
  updateMatricula,
} = require("../services/MatriculaService");

class MatriculaController {
  async get(req, res) {
    try {
      const result = await getMatricula();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Matricula" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getMatriculaById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Matricula" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createMatricula(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateMatricula(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteMatricula(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MatriculaController;
