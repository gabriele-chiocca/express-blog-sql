const express = require('express');
const app = express();
const connection = require('./config/db');

app.get('/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Database query non funziona',
      });
    }

    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});
