import express from "express"
// let, var
const app = express()

app.get("/", (req, res) => {
  res.send("<h1>Hello te23 väklmona!<h1>")
})

app.get("/about", (req, res) => {
    res.json({
        "message": "Hatisk textbox"
    })
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
