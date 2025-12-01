const { getRelatorio, createRelatorio, getRelatorioById, updateRelatorio, deleteRelatorio } = require('../services/RelatorioService');

class RelatorioController {
  async get(req, res) {
    try {
        const result = await getRelatorio();
         return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar Relatório' });
    }
}
    async getById(req, res) {
    try {
        const id = Number(req.params.id)
        const result = await getRelatorioById(id);
         return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar Relatório' });
    }   
}
    async create(req, res) {
    try {
      const data = req.body
      const result = await createRelatorio(data)
      return res.status(201).json(result) 
    } catch (error) {
        console.log(error) 
    }   
}
    async update(req, res) {
    try {
        const id = Number(req.params.id)
        const data = req.body
        const result = await updateRelatorio(data, id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error) 
    }
}
    async delete(req, res) {
    try {
        const id = Number(req.params.id)
        const result = await deleteRelatorio(id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error) 
    }
}

}

module.exports = RelatorioController;