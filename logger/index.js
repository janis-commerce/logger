'use strict';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const { colorize, printStack } = require('./transports/base');

const logger = createLogger({
	levels: {
		error: 0,
		warn: 1,
		deprecated: 2,
		info: 3,
		debug: 4
	},
	transports: [
		new (transports.Console)({
			silent: !!process.env.TEST_ENV,
			level: process.env.NODE_ENV !== 'production' && !process.env.TEST_ENV ? 'debug' : 'info',
			format: combine(
				timestamp(),
				printf(info => {

					const message = info[Symbol.for('splat')] ? `${info.message} - ${printStack(info[Symbol.for('splat')][0])}` : info.message;

					return `[${info.timestamp}][PID=${process.pid}][${colorize(info.level)}]: ${message}`;
				})
			)
		})
	]
});

module.exports = logger;
