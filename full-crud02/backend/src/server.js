import express, { Router } from "express";
import userRoutes from './user.js'
import projectRoutes from './project.js'
import taskRoutes from './task.js'
import { connectDB } from "./db.js";

connectDB()

const app = express()
const port = 3000

const router = Router()
router.get('/', (_, res) => {
    res.send('<h1>justin case<h1>')
})

app.use(express.json())
app.use(router)
app.use(userRoutes)
app.use(projectRoutes)
app.use(taskRoutes)

app.listen(port, () => {
    console.log('running on', port)
})

