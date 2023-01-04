const express = require('express')
const app = express()

app.use(express.json())

const quotes = [
    {
      "quote": "The best preparation for tomorrow is doing your best today.",
      "author": "H. Jackson Brown, Jr."
    },
    {
      "quote": "The supreme art of war is to subdue the enemy without fighting.",
      "author": "Sun Tzu"
    },
    {
      "quote": "The journey of a thousand miles begins with one step.",
      "author": "Lao Tzu"
    },
    {
      "quote": "The World is my country, all mankind are my brethren, and to do good is my religion.",
      "author": "Thomas Paine"
    }
]

app.get("/", (req, res) => {
  console.log("GET /")
  res.send("<h1>This is my first server running on AWS</h1>")
})

app.get("/api/quotes", (req, res) => {
    console.log("GET /api/quotes")
    res.send({quotes: quotes})
})

app.post("/api/quotes", (req, res) => {
    const newQuote = req.body
    console.log("POST /api/quotes", data)
    quotes.push(newQuote)
    res.send(newQuote)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
