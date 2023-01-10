const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("build"))

const quotes = [
    {
      "id": 0,
      "quote": "The best preparation for tomorrow is doing your best today.",
      "author": "H. Jackson Brown, Jr."
    },
    {
      "id": 1,
      "quote": "The supreme art of war is to subdue the enemy without fighting.",
      "author": "Sun Tzu"
    },
    {
      "id": 2,
      "quote": "The journey of a thousand miles begins with one step.",
      "author": "Lao Tzu"
    },
    {
      "id": 3,
      "quote": "The World is my country, all mankind are my brethren, and to do good is my religion.",
      "author": "Thomas Paine"
    }
]

app.get("/api/quotes", (req, res) => {
    console.log("GET /api/quotes")
    res.send({quotes: quotes})
})

app.post("/api/quotes", (req, res) => {
    const newQuote = {
      id: quotes.length,
      quote: req.body.quote,
      author: req.body.author,
    }
    console.log("POST /api/quotes")
    console.log("new quote", newQuote)
    quotes.push(newQuote)
    res.send({newQuote: newQuote})
})

app.get('*', (req, res) => {
  res.sendFile('build/index.html')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
