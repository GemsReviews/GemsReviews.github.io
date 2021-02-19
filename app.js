const path = require('path');
const express = require('express');
const app = express();
const { port } = require('./config');

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
    app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
  }
  
  app.listen(port, () => {
    console.log('Backend listens on port: ' + port);
  });