import express from 'express'
import { generateUploadURL } from './s3.js'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRoute from './routes/user.js'
import FolderRoute from './routes/folder.js'
import bodyParser from 'body-parser'
import serverless from 'serverless-http';

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
  const url = await generateUploadURL()
  res.send({url})
})

app.use('/api/users', UserRoute)
app.use('/api/folders', FolderRoute)

module.exports = app;
module.exports.handler = serverless(app);

// app.listen(8080, () => console.log("listening on port 8080"))
