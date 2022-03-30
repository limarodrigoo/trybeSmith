import Joi from 'joi';

const arrayOfProductsSchema = Joi.object({
  products: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'any.required': '400|Products is required',
      'array.base': '422|Products must be an array of numbers',
      'array.min': '422|Products can\'t be empty',
    }),
});

export default arrayOfProductsSchema;