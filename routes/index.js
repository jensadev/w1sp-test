import express from "express"
import fs, { read } from "fs"

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

const {movies} = JSON.parse(fs.readFileSync("./data/movies.json"))

router.get("/movies", (req, res) => {
    // res.json(movies)
    res.render("movies.njk", {
        title: "Alla filmer",
        movies
    })
})

router.get("/movies/:id", (req, res) => {
    console.log(req.params)
    const movie = movies.find(m => m.id === +req.params.id)
    if (movie) {
        // res.json(movie)
        res.render("movie.njk", {
            title: movie.title,
            movie
        })
    } else {
        res.status(404).json({error: "Movie not found"})
    }
})

export default router