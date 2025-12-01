const { gethistorico_matricula, createhistorico_matricula, gethistorico_matriculaById, updatehistorico_matricula, deletehistorico_matricula } = require('../services/historico_matriculaService');

class historico_matriculaController {
  async get(req, res) {
    try {
        const result = await gethistorico_matricula();
         return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar historico_matricula' });
    }
}
    async getById(req, res) {
    try {
      const id = Number(req.params.id) 
        const result = await gethistorico_matriculaById(id);
            return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar historico_matricula' });
    }
}
    async create(req, res) {
    try {
      const data = req.body 
        const result = await createhistorico_matricula(data)
            return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
}
    async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = req.body 
        const result = await updatehistorico_matricula(data, id)
            return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}
    async delete(req, res) {
    try {
      const id = Number(req.params.id) 
        const result = await deletehistorico_matricula(id)
            return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}

}

module.exports = historico_matriculaController;