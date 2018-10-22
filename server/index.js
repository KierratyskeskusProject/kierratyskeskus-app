const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductRoutes = require('./routes/products.routes');
const ImagesRoutes = require('./routes/images.routes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// allows cors headers (* for all)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});

// dummy endpoint
app.get('/', (req, res) => {
  res.send('Root endpoint!');
});
ProductRoutes(app);
ImagesRoutes(app);
