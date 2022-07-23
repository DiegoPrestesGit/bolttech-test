import express from 'express'
import { startMongo } from './configs/mongo.js'

import router from './routes/index.routes.js'

const app = express()
app.use(express.json())
app.use(router)

startMongo().then(() => app.listen(3000, port => `running on ${port}`))
