const express = require('express');
// const { generateUploadURL } = require('./s3');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoute = require('./routes/user');
const FolderRoute = require('./routes/folder');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

dotenv.config()
const app = express()
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mcts4v4.mongodb.net/dabba?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})

db.once('open', () => {
  console.log('Mongo Connection :: ', 'Established');
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('front'))
app.use(cors({
  origin: '*'
}))

app.get('/api/s3Url', async (req, res) => {
  // const url = await generateUploadURL()
  res.send({url})
})

app.use(`/api/users`, UserRoute);
app.use(`/api/folders`, FolderRoute);

// app.use('/api/users', UserRoute)
// app.use('/api/folders', FolderRoute)

// app.listen(8080, () => console.log("listening on port 8080"))

module.exports = app;
module.exports.handler = serverless(app);

