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
const {
  createUserValidator,
  updateAvatarValidator,
  updateUserValidator,
  userIdValidator,
  loginValidator,
} = require('../middlewares/validation');

router.get('/', auth, getUsers);
router.get('/:id', auth, userIdValidator, getUserById);
router.get('/users/me', auth, getUserInfo);
router.patch('/me', auth, updateUserValidator, updateUserInfo);
router.patch('/me/avatar', auth, updateAvatarValidator, updateUserAvatar);
router.post('/signin', loginValidator, login);
router.post('/signup', createUserValidator, createUser);

module.exports = router;
