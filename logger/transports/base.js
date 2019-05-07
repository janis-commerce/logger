'use strict';

const Transport = require('winston-transport');
const color = require('cli-color');

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
class BaseTransport extends Transport {

	constructor(options = {}) {

		super({
			level: process.env.NODE_ENV !== 'production' && !process.env.TEST_ENV ? 'debug' : 'info',
			...options
		});

	}

	static printStack(obj) {

		if(!(obj instanceof Error))
			return JSON.stringify(obj, 4, '\t');

		const error = {};
		Object.getOwnPropertyNames(obj).forEach(key => {
			error[key] = obj[key];
		});

		return JSON.stringify(error, 4, '\t')
			.replace(/\\n/g, '\n')
			.replace(/\\t/g, '\t');

	}

	static colorize(type) {

		const text = type.toUpperCase();

		switch(type) {

			case 'warn':
				return color.yellow(text);

			case 'info':
				return color.blue(text);

			case 'error':
				return color.red(text);

			case 'deprecated':
				return color.italic.xterm(202)(text); // naranja

			case 'debug':
				return color.green(text);

			default:
				return text;
		}
	}
}

module.exports = BaseTransport;
