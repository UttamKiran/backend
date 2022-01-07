import express from 'express';
import morgan from 'morgan';
import morganBody from 'morgan-body';
import { registerListener, registerRouters } from './helpers';
import {
	// checkEnv,
	registerRequestLogging,
	registerPreprocessor,
	setupDocs,
	setupWinston,
	handleServerErrors,
	winstonLog
} from './tools';

/**
 * Spins up an express server at given socket parameters
 * @param {Number} PORT
 * @param {String} HOST
 * @param {*} worker
 */
export default function spinServer(PORT, HOST, worker) {
	const app = express();
	app.use(express.json());

	// // for winston
    app.use(morgan("dev"));
    morganBody(app, { noColors: true, stream: winstonLog });
	// for winston
	
	registerRequestLogging(worker, app);
	setupWinston(worker);
	// checkEnv();
	registerPreprocessor(app);
	setupDocs(app);
	registerRouters(app);
	handleServerErrors(app);

	return registerListener(app, PORT, HOST);
}
