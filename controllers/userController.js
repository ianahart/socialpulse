const { User } = require('../models/');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({ message: 'success', data: users });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getUser(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findOne({ _id: userId })
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' });

      if (!user) {
        return res.status(404).json({ message: `No user with the id ${userId}` });
      }
      res.status(200).json({ message: 'success', data: user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
