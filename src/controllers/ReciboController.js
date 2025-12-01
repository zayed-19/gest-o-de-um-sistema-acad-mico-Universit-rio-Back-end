const { getRecibo, createRecibo, getReciboById, updateRecibo, deleteRecibo } = require('../services/ReciboService');

class ReciboController {
  async get(req, res) {
    try {
        const result = await getRecibo();
         return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar Recibo' });
    }
}
    async getById(req, res) {
    try {
        const id = Number(req.params.id)
        const result = await getReciboById(id);
         return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar Recibo' });
    }
}
    async create(req, res) {
    try {
      const data = req.body
      const result = await createRecibo(data)
      return res.status(201).json(result) 
    } catch (error) {
        console.log(error)
    }
}   
    async update(req, res) {
    try {
        const id = Number(req.params.id)
        const data = req.body
        const result = await updateRecibo(data, id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error) 
    }
}
    async delete(req, res) {
    try {
        const id = Number(req.params.id)
        const result = await deleteRecibo(id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error) 
    }
}

}

module.exports = ReciboController;