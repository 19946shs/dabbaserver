const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()
const hostname = 'ec2-54-183-185-247.us-west-1.compute.amazonaws.com/';
const port = 80;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get('/', (req, res) => {
    res.send(`
        <p>Home</p>
    `)
})

app.use((req, res) => {
    res.send('404')
})
