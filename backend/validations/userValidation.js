// validations/userValidation.js
const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().pattern(/^[a-zA-Z]+$/).max(100).required(),
  lastName: Joi.string().pattern(/^[a-zA-Z]+$/).max(100).required(),
  email: Joi.string().email().required(),
});

const validateUser = (data) => userSchema.validate(data);

module.exports = validateUser;
