'use strict';

module.exports = () => {
  return function* (next) {
      this.socket.emit('res', 'packet received!');
      this.logger.info('packet:', this.packet);
      yield* next;
  };
};
