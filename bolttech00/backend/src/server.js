import express from 'express'
import cors from 'cors'

import { startMongo } from './configs/mongo.js'
import router from './routes/index.routes.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

startMongo().then(() => app.listen(3001, port => `running on ${port}`))
