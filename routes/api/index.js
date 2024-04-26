const router = require('express').Router();
const usersRoutes = require('./usersRoutes');

router.use('/users', usersRoutes);
router.user('/thoughts', thoughtsRoutes);

module.exports = router;
