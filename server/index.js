const express = require('express')
const app = express()
const database = require("./config/database")
require("dotenv").config()
const cors = require("cors")

database.connect()
app.use(express.json())
app.use(
    cors({
        origin:"http//localhost:3000",
        credentials:true
    })
)

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "server is up and running"
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})