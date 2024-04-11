const Product = require("../models/Products")

exports.getMatchedCategoryProduct = async (req, res) => {
    try{
        const {Category} = req.body
        console.log("I am inside getAllCategories")
        const allMatchedCategoryProduct = await Product.find({Category:Category})
        console.log("printing all MatchedCategoryProduct", allMatchedCategoryProduct)
        return res.status(200).json({
            success: true,
            data: allMatchedCategoryProduct
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}