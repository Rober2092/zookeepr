const express = require('express');
const app = express();
const { animals } = require('./data/animals');
app.listen(3001, () => {
    app.get('/api/animals', (req, res) => {
        res.json(animals);
      });
       
    
    console.log(`API server now on port 3001!`);
  });
  