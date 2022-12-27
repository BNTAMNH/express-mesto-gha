const router = require('express').Router();
const {
  createUser,
  getUsers,
  getUserById,
  getUserInfo,
  updateUserInfo,
  updateUserAvatar,
  login,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/users/me', getUserInfo);
router.patch('/me', updateUserInfo);
router.patch('/me/avatar', updateUserAvatar);
router.post('/signin', login);
router.post('/signup', createUser);

module.exports = router;
