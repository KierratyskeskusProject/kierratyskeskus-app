const express = require('express');
const ProductRoutes = require('./routes/products.routes');
const CaptureImg = require('./routes/captureImg.routes');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});

// dummy endpoint
app.get('/', (req, res) => {
  res.send('Root endpoint');
});

ProductRoutes(app);
CaptureImg(app);
