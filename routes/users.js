const router = require('express').Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUserInfo,
  updateUserAvatar,
  login,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/me', updateUserInfo);
router.patch('/me/avatar', updateUserAvatar);
router.post('/signin', login);
router.post('/signup', createUser);

module.exports = router;
