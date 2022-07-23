import express from 'express'
import { generateUploadURL } from './s3.js'
import cors from 'cors'

const app = express()

app.use(express.static('front'))
app.use(cors({
  origin: '*'
}))

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

app.listen(8080, () => console.log("listening on port 8080"))