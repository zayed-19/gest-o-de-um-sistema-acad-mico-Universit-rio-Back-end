const { getMultipla, createMultipla, getMultiplaById, updateMultipla, deleteMultipla } = require('../services/MultiplaService');

class MultiplaController {
  async get(req, res) {
    try {
        const result = await getMultipla();
         return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Multipla' });
    }
}
    async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getMultiplaById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Multipla' });
    }
}
    async create(req, res) {
    try {
      const data = req.body
      const result = await createMultipla(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
}
    async update(req, res) {
    try {
      const id = Number(req.params.id)
        const data = req.body
        const result = await updateMultipla(data, id)
        return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }   
}
    async delete(req, res) {
    try {
      const id = Number(req.params.id)
        const result = await deleteMultipla(id)
        return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}

}
module.exports = MultiplaController;
