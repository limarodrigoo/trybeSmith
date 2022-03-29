import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': '400|Username is required',
    'string.base': '422|Username must be a string',
    'string.min': '422|Username must be longer than 2 characters',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': '400|Password is required',
    'string.base': '422|Password must be a string',
    'string.min': '422|Password must be longer than 7 characters',
  }),
});

export default loginSchema;
