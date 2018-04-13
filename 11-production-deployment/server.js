const express = require('express');
const PORT = 3000;
const conString = 'postgres://postgres:82469173@localhost:5432/random';
const pg = require('pg');
const app = express();

const client = new pg.Client(conString);
client.connect();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(PORT, () => console.log('listening on PORT', PORT));