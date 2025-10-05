import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(6).max(15).required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('personal', 'work', 'home').required(),
});

const dataToValidate = {
  name: 'John Doe',
  phoneNumber: '1234567890',
  email: 'john.doe@example.com',
  isFavourite: true,
  contactType: 'personal',
};

const validationResult = createContactSchema.validate(dataToValidate);
if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid!');
}

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(6).max(15).required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('personal', 'work', 'home').required(),
});

