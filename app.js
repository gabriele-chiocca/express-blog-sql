const express = require('express');
const app = express();
const connection = require('./config/db');

//API INDEX
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

//API DESTROY

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM posts WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Errore nella eliminazione del post',
      });
    }

    res.json({
      message: 'Post eliminato',
    });
  });
});

app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});
