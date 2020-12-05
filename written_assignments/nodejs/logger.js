const EventEmitter = require('events');
const uuid = require('uuid');

// displays unique ID
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg});
    }
};

// module.exports = Logger;

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ',data));

logger.log('Hello world');
logger.log('Hi');
logger.log('Hello');
