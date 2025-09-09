import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi magi!"
    })
})

app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Om oss",
        message: "Detta är ett skolarbete av Jens."
    })
})

app.get("/greeting", (req, res) => {
    console.log(req.query)
    res.send(`Hejsan ${req.query.name}, ${req.query.message}`)
})


// Skriv en ny route, till about sidan
// skapa about sidan, som en njk templat
// på about sidan, ska det finnas en länk till er github, 
// en bild och en text om att detta är ett skolarbete

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
