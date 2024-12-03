const express = require('express');
const path = require('path');
const http = require('http');
const Data=require('./Students')

const app = express();
const myserver = http.createServer(app);

app.use(express.json());

app.get('/', (req, res) => {
return res.send('HEllo');
});

app.get('/Home', (req, res) => {
res.sendFile(path.join(__dirname, '../Home.html'));
});

app.get('/About', (req, res) => {
res.sendFile(path.join(__dirname, './About.html'));
});


app.get('/Data', (req, res) => {
  console.log(Data)
  return res.json(Data);
});

myserver.listen(7788, () => {
console.log('Server is up on port 7788');
});
