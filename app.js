const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/value', (req, res) => {
  res.send('10');
});

app.get('/value2', (req, res) => {
    res.send('20');
});

app.get('/value3', (req, res) => {
    res.send('30');
});

app.get('/value4', (req, res) => {
    res.send('40');
});
  

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
