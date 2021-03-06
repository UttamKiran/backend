/* eslint-disable no-unused-vars */
import config from 'config';
import { ValidationError } from 'express-validation';
import { StatusCodes } from 'http-status-codes';

import { sendFailure } from '../helpers';
import { logger } from './index';

/**
 * Handles the error response
 * @param {Error} err
 */
const errorHandler = (err, _req, res, _next) => {
	if (err instanceof ValidationError) {
		const { message, statusCode, error, details } = err;
		return sendFailure(res, { message, statusCode, error, errorMsg: details }, statusCode);
	}
	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		message: 'Something went wrong from our side. Please try again after some time.',
		error:
			config.util.getEnv('NODE_ENV') === 'production'
				? undefined
				: { message: err.message, stack: err.stack }
	});

	logger.error(err.stack);
};

/**
 * Register the error handler
 * @param {*} ExpressAppInstance
 */
export default function handleServerErrors(app) {
	app.use(errorHandler);
}
