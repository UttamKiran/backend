import { transports, format, createLogger } from 'winston';
import fs from 'fs';
import path from 'path';
require('winston-daily-rotate-file');


const logDir = path.normalize(`${__dirname}/../../log`);
const {
    combine,
    timestamp,
    label,
    prettyPrint,
    json
} = format;

/**
 * Creates log folder if not exist
 * @param {string} logDir filepath to log
 * @returns WinstonTransport
 */

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

/**
 * Creates a customized console transport
 * @param {*} worker
 * @returns {*} WinstonConsoleTransport
 */
const console = createLogger({
    format: combine(
        timestamp(),
        prettyPrint(),
        // json(),
    ),
    transports: [
        new transports.DailyRotateFile({
            filename: `${logDir}/info.log`,
            datePattern: 'YYYY-MM-DD',
            level: 'info',
        }),
        new transports.DailyRotateFile({
            filename: `${logDir}/errors.log`,
            datePattern: 'YYYY-MM-DD',
            level: 'error',
        }),
        new transports.File({
            filename: `${logDir}/warn.log`,
            level: 'warn',
        }),
        new transports.File({
            filename: `${logDir}/debug.log`,
            level: 'debug',
        }),
    ],
});

export class Logger {
    info(msg) {
        console.info(msg);
    }
    warn(msg) {
        console.warn(msg);
    }
    debug(msg) {
        console.debug(msg);
    }
    error(msg) {
        console.error(msg);
    }
    write(msg) {
        console.info(msg);
    }
}

export default new Logger();

