const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getUserInfo,
  updateUserInfo,
  updateUserAvatar,
} = require('../controllers/users');

const {
  updateAvatarValidator,
  updateUserValidator,
  userIdValidator,
} = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/:id', userIdValidator, getUserById);
router.get('/users/me', getUserInfo);
router.patch('/me', updateUserValidator, updateUserInfo);
router.patch('/me/avatar', updateAvatarValidator, updateUserAvatar);

module.exports = router;
