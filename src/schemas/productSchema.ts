import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'any.required': '400|Name is required',
    'string.base': '422|Name must be a string',
    'string.min': '422|Name must be longer than 2 characters',
  }),
  amount: Joi.string().min(2).required().messages({
    'any.required': '400|Amount is required',
    'string.base': '422|Amount must be a string',
    'string.min': '422|Amount must be longer than 2 characters',
  }),
});

export default productSchema;
