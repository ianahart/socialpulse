const { User } = require('../models/');

module.exports = {
  async getAllUsers() {
    try {
      const users = await User.find();
      res.status(200).json({ message: 'success', data: users });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
