const DymoScale = function () {
  const HID = require('node-hid');

  this.weight = 0;
  this.device = (function () {
    // HACK: cache the device in a variable (deviceHandle)
    // On some machines (OS X 10.10+ ?) re-opening the same device
    // results in a "cannot open device" error
    if (!this.deviceHandle) {
      const devices = HID.devices().filter(x => x.manufacturer === 'DYMO');

      if (devices.length > 0) {
        this.deviceHandle = new HID.HID(devices[0].path);
      }
    }
    return this.deviceHandle;
  })();

  this.device.on("data", (data) => {
    this.weight = data[4];
  });

  this.device.on("error", (error) => console.log(error));

  this.read = function (callback) {
    callback(null, {value: this.weight, unit: null});
  };
};

module.exports = new DymoScale();
