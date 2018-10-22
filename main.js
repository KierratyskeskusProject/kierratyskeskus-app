const { app, BrowserWindow } = require('electron');

let win = null;

function createWindow() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600, show: true})
  win.loadURL('http://localhost:3000');

  // Remove window once app is closed
  win.on('closed', () => {
    win = null;
  });
}


app.on('ready-to-show', () => {
  createWindow();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
