const express = require('express');
const path = require('path');  
const http = require('http');
const Students=require('./students.json')
const app = express();
const myserver = http.createServer(app);

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.get('/Home', (req, res) => {
  res.sendFile(path.join(__dirname, '../Home.html'));
});

app.get('/About', (req, res) => {
  res.sendFile(path.join(__dirname, './About.html'));
});

app.get('/Students', (req, res) => {
  console.log(Students);
  return res.json(Students);
});

myserver.listen(8000, () => {
  console.log('Server is up on port 8000');
});
