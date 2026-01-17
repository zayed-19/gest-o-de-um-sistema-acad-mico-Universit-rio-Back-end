const {
  getNotificacoes,
  createNotificacoes,
  getNotificacoesById,
  updateNotificacoes,
  deleteNotificacoes,
} = require("../services/NotificacoesService");

class NotificacoesController {
  async get(req, res) {
    try {
      const result = await getNotificacoes();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Notificações" });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await getNotificacoesById(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar Notificações" });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await createNotificacoes(data);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const result = await updateNotificacoes(data, id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await deleteNotificacoes(id);
      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = NotificacoesController;
