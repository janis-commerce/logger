
# Logger

The `logger` module allows you to leave message on console with optional data.
The messages will appear with a level informed.
The levels are:
 - error
 - warn
 - deprecated
 - info
 - debug

In case of having the environment variable `TEST_ENV` with a truthy value, the logger will be in `silent` mode.

## Installation

```
npm install @janiscommerce/logger
```

## Usage

```js
const logger = require('@janiscommerce/logger');

logger.info('a great message');
// expected output: [2019-05-14T15:51:25.622Z][PID=1929][INFO]: a great message

const foo = 'bar';
logger.info('a great message with data', foo);
// expected output: [2019-05-14T15:51:25.623Z][PID=1929][INFO]: a great message with data - "bar"

logger.warn('this is a warning');
// expected output: [2019-05-14T15:51:25.623Z][PID=1929][WARN]: this is a warning

logger.error('this is an error');
// expected output: [2019-05-14T15:51:25.623Z][PID=1929][ERROR]: this is an error

logger.debug('this message will only appear in debug mode');
// expected output: [2019-05-14T15:51:25.623Z][PID=1929][DEBUG]: this message will only appear in debug mode

logger.deprecated('this functionality is deprecated');
// expected output: [2019-05-14T15:51:25.623Z][PID=1929][DEPRECATED]: this functionality is deprecated
```