const User = require('../models/user');
const { STATUS_BAD_REQUEST, STATUS_NOT_FOUND, STATUS_SERVER_ERROR } = require('../utils/constants');
const NotFound = require('../errors/NotFound');

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные при создании пользователя' });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .orFail(new NotFound('Пользователь с указанным ID - не найден'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Передан некорректный ID пользователя' });
      } else if (err.status === 404) {
        res.status(err.status).send({ message: err.message });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.updateUserInfo = (req, res) => {
  const userId = req.user._id;
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    userId,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(STATUS_NOT_FOUND).send({ message: 'Пользователь с указанным ID - не найден' });
      } else if (err.name === 'ValidationError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные при обновлении пользователя' });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.updateUserAvatar = (req, res) => {
  const userId = req.user._id;
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    userId,
    { avatar },
    { new: true },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(STATUS_NOT_FOUND).send({ message: 'Пользователь с указанным ID - не найден' });
      } else if (err.name === 'ValidationError') {
        res.status(STATUS_BAD_REQUEST).send({ message: 'Переданы некорректные данные при обновлении пользователя' });
      } else {
        res.status(STATUS_SERVER_ERROR).send({ message: 'Произошла ошибка' });
      }
    });
};
