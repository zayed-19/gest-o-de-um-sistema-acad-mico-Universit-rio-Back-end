const { getCargo, createCargo, getCargoById, updateCargo, deleteCargo } = require('../services/CargoService');

class CargoController {
  async get(req, res) {
    try {
      const result = await getCargo();
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Cargo' });
    }
  }
  async getById(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await getCargoById(id);
     return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar Cargo' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body
      const result = await createCargo(data)
      return res.status(201).json(result) 
    } catch (error) {
      console.log(error) 
    }
  }
  async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = req.body
      const result = await updateCargo(data, id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
  async delete(req, res) {
    try {
      const id = Number(req.params.id)
      const result = await deleteCargo(id)
      return res.status(201).json(result)
    } catch (error) {
      console.log(error) 
    }
  }
}

module.exports = CargoController;
