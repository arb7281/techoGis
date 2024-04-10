const express = require("express")
const router = express.Router()

const {
    getAllCategories
} = require("../controllers/fetchCategory")

router.get("/showAllCategories", getAllCategories)

module.exports = router