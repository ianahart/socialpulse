const router = require('express').Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../../controllers/userController');

/* /api/users */
router.route('/').get(getAllUsers).post(createUser);

/* /api/users/:userId */
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
