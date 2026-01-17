const {
  getDiscicurso,
  createDiscicurso,
  getDiscicursoById,
  updateDiscicurso,
  deleteDiscicurso,
} = require("../services/DiscicursoService");

class DiscicursoController {
  async get(req, res) {
    try {
      const result = await getDiscicurso();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Discicurso" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getDiscicursoById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Discicurso" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createDiscicurso(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateDiscicurso(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteDiscicurso(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DiscicursoController;
