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
const auth = require('../middlewares/auth');

router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);
router.get('/users/me', auth, getUserInfo);
router.patch('/me', auth, updateUserInfo);
router.patch('/me/avatar', auth, updateUserAvatar);
router.post('/signin', login);
router.post('/signup', createUser);

module.exports = router;
