const nodeCrypto = require('crypto');

window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
};
window.ResizeObserver = jest.fn().mockImplementation(function MockedResixeObserver() {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
});
