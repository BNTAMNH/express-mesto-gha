const { celebrate, Joi } = require('celebrate');
const regExpUrl = require('../utils/constants');

module.exports.createCardValidator = celebrate({
  body: Joi.object.keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().regex(regExpUrl),
  }),
});

module.exports.cardIdValidator = celebrate({
  params: Joi.object.keys({
    cardId: Joi.string().alphanum().length(24),
  }),
});

module.exports.createUserValidator = celebrate({
  body: Joi.object.keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
    avatar: Joi.string().regex(regExpUrl),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.updateUserValidator = celebrate({
  body: Joi.object.keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

module.exports.updateUserAvatar = celebrate({
  body: Joi.object.keys({
    avatar: Joi.string().regex(regExpUrl),
  }),
});

module.exports.userIdValidator = celebrate({
  params: Joi.object.keys({
    userId: Joi.string().alphanum().length(24),
  }),
});

module.exports.loginValidator = celebrate({
  body: Joi.object.keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});
