import chalk from 'chalk';
import config from 'config';

import { name as appName, version } from '../../package.json';
import { dbConnection } from '../connections/db.connection';
import { connect as redis } from '../connections/redis';
import { logger } from '../tools';

/**
 * Spins a server on given socket parameters [HOST, PORT].
 * @param {*} ExpressAppInstance
 * @param {string} HOST - Hostname.
 * @param {number} PORT - Port number.
 */

export default function registerListener(app, PORT, HOST) {
	const environment = config.util.getEnv('NODE_ENV');
	const server = app.listen(PORT, HOST, async () => {
		const { address, port } = server.address();
		logger.info(
			`✅ Started ${appName} v${version} ${chalk.yellow(
				environment
			)} server at port ${chalk.magenta(port)}`
		);
		// Connect to DB
		await dbConnection();
		// Connect to Redis
		await redis();

		logger.info(`✅ Listening for requests at ${chalk.cyan(address + ':' + port)}`);
		logger.info(`Logging level set to: ${chalk.blue(logger.level)}`);
	});

	return server;
}
