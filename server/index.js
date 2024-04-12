const express = require('express')
const app = express()
const database = require("./config/database")
require("dotenv").config()
const cors = require("cors")

const productRoutes = require("./routes/Product")
const userRoutes = require("./routes/User")

database.connect()
app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)


app.use("/api/v1/categoryProducts", productRoutes)
app.use("/api/v1/auth", userRoutes)


app.get('/', (req, res) => {
    console.log("/ route triggered")
    return res.json({
        success: true,
        message: "server is up and running"
    })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})