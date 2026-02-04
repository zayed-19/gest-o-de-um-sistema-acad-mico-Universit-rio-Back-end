const { registerUser, loginUser } = require("../services/AuthService");

class AuthController {
  async register(req, res) {
    try {
      const data = req.body;
      const result = await registerUser(data);
      return res.status(201).json({
        message: "Usuário criado com sucesso",
        usuario: result,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const data = req.body;
      const usuario = await loginUser(data);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = AuthController;
