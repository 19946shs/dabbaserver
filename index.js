const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()

app.listen(3005)

app.get('/', (req, res) => {
    res.send(`
        <p>Home</p>
    `)
})

app.use((req, res) => {
    res.send('404')
})
