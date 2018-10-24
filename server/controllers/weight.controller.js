const HID = require('node-hid');

const DymoScale = function dymoScale() {
  this.weight = 0;
  this.error = null;
  this.device = (function findDevice() {
    if (!this.deviceHandle) {
      const devices = HID.devices().filter(x => x.manufacturer === 'DYMO');

      if (devices.length > 0) {
        this.deviceHandle = new HID.HID(devices[0].path);
      }
    }
    return this.deviceHandle;
  }());


  this.device.on('data', ([,,,, weight]) => {
    this.weight = weight;
    console.log(this.weight);
  });

  this.device.on('error', (error) => {
    this.error = error;
  });


  this.read = function callbackFunc(callback) {
    callback(this.error, { value: this.weight });
  };
};

module.exports = new DymoScale();
