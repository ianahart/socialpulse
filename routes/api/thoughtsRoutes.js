const router = require('express').Router();

const { getAllThoughts, getThought, createThought } = require('../../controllers/thoughtController');

/* /api/thoughts  */
router.route('/').get(getAllThoughts).post(createThought);

/* api/thoughts/:thoughtId  */
router.route('/:thoughtId').get(getThought);

module.exports = router;
