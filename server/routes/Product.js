const express = require("express")
const router = express.Router()

const {
    getMatchedCategoryProduct,
    getAllProduct
} = require("../controllers/fetchProduct")

router.post("/getMatchedCategoryProduct", getMatchedCategoryProduct)

router.get("/getAllProducts", getAllProduct)

module.exports = router