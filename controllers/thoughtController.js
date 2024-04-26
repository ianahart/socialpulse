const { Thought } = require('../models/');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json({ message: 'success', data: thoughts });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
