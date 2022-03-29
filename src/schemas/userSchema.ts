import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': '400|Username is required',
    'string.base': '422|Username must be a string',
    'string.min': '422|Username must be longer than 2 characters',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': '400|Classe is required',
    'string.base': '422|Classe must be a string',
    'string.min': '422|Classe must be longer than 2 characters',
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': '400|Level is required',
    'number.base': '422|Level must be a number',
    'number.min': '422|Level must be greater than 0',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': '400|Password is required',
    'string.base': '422|Password must be a string',
    'string.min': '422|Password must be longer than 7 characters',
  }),
});

export default userSchema;
