// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mongoose from 'mongoose'
import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const port = 3000
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
