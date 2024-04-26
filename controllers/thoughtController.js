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

  async getThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;

      const thought = await Thought.findById(thoughtId);

      if (!thought) {
        return res.status(404).json({ message: `A thought with the id ${thoughtId} was not found` });
      }

      res.status(200).json({ message: 'success', data: thought });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
