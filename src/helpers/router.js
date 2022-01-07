import 'express-async-errors';

import { UserRouter } from '../routes';

/**
 * Registers all routes and handles server errors.
 * @param {*} ExpressAppInstance
 */

export default function registerRouters(app) {
	app.use('/user/api/user', UserRouter);
}
