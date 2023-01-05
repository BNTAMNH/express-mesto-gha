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

const {
  createUserValidator,
  updateAvatarValidator,
  updateUserValidator,
  userIdValidator,
  loginValidator,
} = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/:id', userIdValidator, getUserById);
router.get('/users/me', getUserInfo);
router.patch('/me', updateUserValidator, updateUserInfo);
router.patch('/me/avatar', updateAvatarValidator, updateUserAvatar);
router.post('/signin', loginValidator, login);
router.post('/signup', createUserValidator, createUser);

module.exports = router;
