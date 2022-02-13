import winston from 'winston';
import config from '../config';

/**
 * Loader logger to display the necessary responses from the server in the console
 * more info :  https://www.npmjs.com/package/winston#logging-levels
 * or : http://zetcode.com/javascript/winston/
 */

//A transport is a storage device or output mechanism for our logs.
const transports = [];

//
if (process.env.NODE_ENV !== 'development') {
    transports.push(
        new winston.transports.Console()
    )
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            )
        })
    )
}

const LoggerInstance = winston.createLogger({
    //maximum level of log messages to log
    level: config.logs.level,

    //	the set of level message types chosen
    levels: winston.config.npm.levels,

    //the format of log messages
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),

    //set of logging destinations for log messages
    transports
});

export default LoggerInstance;