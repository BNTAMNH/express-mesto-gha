const router = require('express').Router();

const {
  createCard,
  getCards,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const auth = require('../middlewares/auth');

router.post('/', auth, createCard);
router.get('/', auth, getCards);
router.delete('/:cardId', auth, deleteCardById);
router.put('/:cardId/likes', auth, likeCard);
router.delete('/:cardId/likes', auth, dislikeCard);

module.exports = router;
