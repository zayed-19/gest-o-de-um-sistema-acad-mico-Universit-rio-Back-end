const { getPagamentos, createPagamento, getPagamentoById, updatePagamento, deletePagamento } = require('../services/PagamentoService');

class PagamentoController {
  async get(req, res) {
    try {
        const result = await getPagamentos();
         return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Pagamentos' });
    }
}
    async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getPagamentoById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Pagamento' });
    }
}
    async create(req, res) {
    try {
      const data = req.body
        const result = await createPagamento(data)
        return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
}
    async update(req, res) {
    try {
      const id = Number(req.params.id)
        const data = req.body
        const result = await updatePagamento(data, id)
        return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}   
    async delete(req, res) {
    try {
      const id = Number(req.params.id)
        const result = await deletePagamento(id)
        return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}

}

module.exports = PagamentoController;