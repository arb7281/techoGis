const express = require("express")
const router = express.Router()

const {
    
    getAllProduct
} = require("../controllers/fetchProduct")



router.get("/getAllProducts", getAllProduct)

module.exports = router