require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

// require("./db/mongodb")

app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
  })

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})