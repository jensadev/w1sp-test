import express from "express"
import fs from "fs"

const router = express.Router()


router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi magi!"
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Om oss",
        message: "Detta är ett skolarbete av Jens."
    })
})

router.get("/greeting", (req, res) => {
    console.log(req.query)
    // res.send(`Hejsan ${req.query.name}, ${req.query.message}`)
    res.render("greeting.njk", {
        title: "Hälsningssida",
        name: req.query.name,
        message: req.query.message
    })
})

router.get("/movies", (req, res) => {
    const {movies} = JSON.parse(fs.readFileSync("./data/movies.json"))
    res.json(movies)
})

export default router