const HID = require('node-hid');
const usb = require('usb');

const DymoScale = function dymoScale() {
  const vid = 0x922;
  const pid = 0x8003;
  let msg = '';
  let attached = false;

  /* const devicess = usb.findByIds(this.vid, this.pid);
  console.log('DEVICES', devicess);
  if (devicess.length > 0) {
    this.deviceHandle = new HID.HID(devicess[0].path);
    console.log(this.deviceHandle);
  } else {
    console.log(no)
  } */

  usb.on('attach', (devicex) => {
    if (devicex.deviceDescriptor.idVendor === vid && devicex.deviceDescriptor.idProduct === pid) {
      msg = 'Dymo M10 attached';
      console.log(msg);

      this.weight = 0;
      this.error = null;
      if (attached === true) {
        this.deviceHandle = new HID.HID(devices[0].path);
        this.device = (function findDevice() {
          const devices = HID.devices().filter(x => x.manufacturer === 'DYMO');
          
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
      });
      }
      
  usb.on('detach', (devicex) => {
    if (devicex.deviceDescriptor.idVendor === vid && devicex.deviceDescriptor.idProduct === pid) {
      msg = 'Dymo M10 detached';
      console.log(msg);
      attached = true;
    }
  });
};


module.exports = new DymoScale();

/* this.weight = 0;
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
  }); */
