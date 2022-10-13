const Card = require('../models/card');
const { STATUS_BAD_REQUEST, STATUS_SERVER_ERROR } = require('../utils/constants');
const NotFound = require('../errors/NotFound');

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные при создании карточки' });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' }));
};

// неправильный статус ошибки
module.exports.deleteCardById = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .orFail(new NotFound('Пользователь с указанным ID - не найден'))
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные при удалении карточки' });
      } else if (err.status === 404) {
        res.status(err.status).send({ message: err.message });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .orFail(new NotFound('Карточка с указанным ID - не найдена'))
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные для постановки лайка' });
      } else if (err.status === 404) {
        res.status(err.status).send({ message: err.message });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .orFail(new NotFound('Карточка с указанным ID - не найдена'))
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные для снятия лайка' });
      } else if (err.status === 404) {
        res.status(err.status).send({ message: err.message });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};
