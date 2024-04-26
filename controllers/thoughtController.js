const { Thought, User } = require('../models/');

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

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );

      res.status(201).json({ message: 'success', data: { thought, user } });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async updateThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;

      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: `A thought with the id ${thoughtId} was not found` });
      }

      res.status(200).json({ message: 'success', data: thought });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async deleteThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId;

      const thought = await Thought.findByIdAndDelete(thoughtId);

      if (!thought) {
        res.status(404).json({ message: `A thought with the id ${thoughtId} was not found` });
      }

      res.status(200).json({ message: 'success' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createReaction(req, res) {
    try {
      const thoughtId = req.params.thoughtId;

      const thought = await Thought.findByIdAndUpdate(thoughtId, { $addToSet: { reactions: req.body } }, { new: true })
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v');

      res.status(201).json({ message: 'success', data: thought });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async deleteReaction(req, res) {
    try {
      const { thoughtId, reactionId } = req.params;

      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: { _id: reactionId } } },
        { new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: `A thought Id (${thoughtId}) or reaction Id ${reactionId} do not exist` });
      }

      res.status(200).json({ message: 'success', data: thought });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
