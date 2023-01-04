const router = require('express').Router();

const {
  createCard,
  getCards,
  deleteCardById,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const auth = require('../middlewares/auth');
const { createCardValidator, cardIdValidator } = require('../middlewares/validation');

router.post('/', auth, createCardValidator, createCard);
router.get('/', auth, getCards);
router.delete('/:cardId', auth, cardIdValidator, deleteCardById);
router.put('/:cardId/likes', auth, cardIdValidator, likeCard);
router.delete('/:cardId/likes', auth, cardIdValidator, dislikeCard);

module.exports = router;
