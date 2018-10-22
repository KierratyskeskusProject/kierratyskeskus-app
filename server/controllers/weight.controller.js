const DymoScale = function () {
  const HID = require('node-hid');

  this.weight = 0;
  this.error = null;

  this.device = (function () {

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
      console.log(this.weight);
    });

    this.device.on("error", (error) => {
      this.error = error;
    });


  this.read = function (callback) {
    callback(this.error, {value: this.weight, unit: null});
  };
};

module.exports = new DymoScale();
