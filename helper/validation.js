// jshint esversion: 6
// jshint node: true
"use strict";

// validation
const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = data => {
  const schema = Joi.object({
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email(),
    username: Joi.string().min(5).required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
    birthday: Joi.date().required(),
    city: Joi.string().min(2).required(),
    postalcode: Joi.number().integer().min(1067).max(99998)
  });

  return schema.validate(data);
};

// Reset Password Validation
const resetPasswordValidation = data => {
  const schema = Joi.object({
    resetPasswordToken: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.resetPasswordValidation = resetPasswordValidation;
