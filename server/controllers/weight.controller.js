const DymoScale = () => {
  const HID = require('node-hid');

  this.device = function () {
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
  };

  this.read = function (callback) {
    const device = this.device();

    if (device) {
      device.read((error, data) => {
        if (error) {
          return callback(error);
        }

        const weight = { value: 0, unit: null };
        const raw = ((256 * data[5]) + data[4]);

        if (data[1] === 4) {
          if (data[2] === 11) {
            weight.value = parseFloat(raw / 10.0);
            weight.unit = 'ounces';
          } else if (data[2] === 2) {
            weight.value = raw;
            weight.unit = 'grams';
          }
        }

        callback(null, weight);
      });
    } else {
      callback(new Error('device offline'));
    }
  };
};

module.exports = new DymoScale();
