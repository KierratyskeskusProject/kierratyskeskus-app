const HID = require('node-hid');
const usb = require('usb');


const vid = 0x0922; // 0x922
const pid = 0x8003; // 0x8009
let reading = false;
let msg = '';
let interval;
let weight = 0;
const unit = 'grams';
let error = null;

const DymoScale = function dymoScale() {
  const startReading = () => {
    if (reading) return;
    try {
      const d = new HID.HID(vid, pid);
      reading = true;

      d.on('data', (data) => {
        const [,,,, weightx] = Buffer.from(data);
        weight = weightx;
      });

      d.on('error', (err) => {
        reading = false;
        error = err;
        d.close();
      });
    } catch (err) {
      if (/cannot open device/.test(err.message)) {
        msg = 'Dymo cannot be found';
      }
    }
  };

  usb.on('attach', (device) => {
    if (device.deviceDescriptor.idVendor === vid && device.deviceDescriptor.idProduct === pid) {
      msg = 'Dymo M10 attached';
      console.log(msg);
      interval = setInterval(startReading, 100);
    }
  });

  usb.on('detach', (device) => {
    if (device.deviceDescriptor.idVendor === vid && device.deviceDescriptor.idProduct === pid) {
      msg = 'Dymo detached';
      console.log(msg);
      reading = false;
      clearInterval(interval);
    }
  });

  startReading();

  const read = (callback) => {
    callback(error, { value: weight, unit });
  };
  return read;
};

module.exports = new DymoScale();
