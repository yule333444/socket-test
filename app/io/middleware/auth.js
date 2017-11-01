'use strict';

module.exports = () => {
  return function* (next) {
      this.socket.emit('res', 'connected!');
      yield* next;
      // execute when disconnect.
      this.logger.info('disconnection!');
  };
};
