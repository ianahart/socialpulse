const router = require('express').Router();

const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtController');

/* /api/thoughts  */
router.route('/').get(getAllThoughts).post(createThought);

/* api/thoughts/:thoughtId  */
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

/* /api/thoughts/:thoughtId/reactions  */
router.route('/:thoughtId/reactions').post(createReaction);

/* /api/thoughts/:thoughtId/reactions/:reactionId  */

module.exports = router;
