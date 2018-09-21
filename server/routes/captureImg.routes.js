const CaptureImg = (app) => {
  app.get('/captureImg', (req, res) => {
    res.status(200).json({
      message: 'Handle /captureImg GET requests',
    });
  });
};
module.exports = CaptureImg;
