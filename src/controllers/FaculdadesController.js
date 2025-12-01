const { getFaculdades, getFaculdadesById, createFaculdades, updateFaculdades, deleteFaculdades } = require('../services/FaculdadesService');

class FaculdadesController {
  async get(req, res) {
    try {
        const result = await getFaculdades();
         return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Faculdades' });
    }
}
    async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getFaculdadesById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Faculdades' });
    }
}

    async create(req, res) {
    try {
      const data = req.body
      const result = await createFaculdades(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
}

    async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = req.body
      const result = await updateFaculdades(data, id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}

    async delete(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await deleteFaculdades(id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
}

}

module.exports = FaculdadesController;




