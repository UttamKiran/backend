import { validate } from 'express-validation';

export const validateRequest = validator => {
	return validate(validator, { context: true, statusCode: 400, keyByField: true }, {});
};
