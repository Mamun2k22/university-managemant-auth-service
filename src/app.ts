// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Route
app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Server Run Successfully')
})

export default app
