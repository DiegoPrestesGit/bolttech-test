import express, { Router } from "express";
import userRoutes from './user.js'
import { connectDB } from "./db.js";
// import projectRoutes from './project.js'

connectDB()

const app = express()
const port = 3000

const router = Router()
router.get('/', (_, res) => {
    res.send('justin case')
})

app.use(express.json())
app.use(router)
app.use(userRoutes)

app.listen(port, () => {
    console.log('running on', port)
})

