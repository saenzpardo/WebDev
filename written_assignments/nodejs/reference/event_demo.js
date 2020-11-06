
const EventEmitter = require('events');

// Create emitter class

class MyEmitter extends EventEmitter {
// nothing here
};

// Init object
const myEmitter = new MyEmitter();

// Even Listener
myEmitter.on('event', () => console.log('Event Fired'));

// Init event
myEmitter.emit('event');