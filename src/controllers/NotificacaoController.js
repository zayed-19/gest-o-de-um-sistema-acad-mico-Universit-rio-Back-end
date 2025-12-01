const { getNotificacao, createNotificacao, getNotificacaoById, updateNotificacao, deleteNotificacao } = require('../services/NotificacaoService');

class NotificacaoController {
  async get(req, res) {
    try {
        const result = await getNotificacao();
            return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Notificacao' });
    }
}
    async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getNotificacaoById(id);
         return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Notificacao' });
    }
}
    async create(req, res) {
    try {
      const data = req.body
      const result = await createNotificacao(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
}
    async update(req, res) {
    try {
      const id = Number(req.params.id)
        const data = req.body
        const result = await updateNotificacao(data, id)
        return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}   
    async delete(req, res) {
    try {
      const id = Number(req.params.id)
        const result = await deleteNotificacao(id)
        return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}

}

module.exports = NotificacaoController;