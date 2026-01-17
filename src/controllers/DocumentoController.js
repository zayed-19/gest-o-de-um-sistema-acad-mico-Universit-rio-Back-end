const {
  getDocumento,
  getDocumentoById,
  createDocumento,
  updateDocumento,
  deleteDocumento,
} = require("../services/DocumentoService");

class DocumentoController {
  async get(req, res) {
    try {
      const result = await getDocumento();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Documento" });
    }
  }

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getDocumentoById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Documento" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createDocumento(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateDocumento(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteDocumento(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DocumentoController;
