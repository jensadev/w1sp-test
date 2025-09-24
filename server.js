import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

import indexRouter from "./routes/index.js"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.use("/", indexRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
