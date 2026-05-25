import express from "express"
import { errorHandler } from "./middlewares/error.middleware"

const app = express()
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "Welcome to NutroGO API"
    })
})

app.use(errorHandler)

export default app