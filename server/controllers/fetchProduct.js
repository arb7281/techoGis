const Product = require("../models/Products")
const Category = require("../models/Category")


exports.getMatchedCategoryProduct = async (req, res) => {
    try{
        const {categoryId} = req.body
        console.log("printing req.body in products", req.body)

        const category = await Category.findById(categoryId)

        if (!category) {
            console.log("category not found")
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }
        const categoryName = category.Category

        console.log("I am inside getAllCategories")

        const allMatchedCategoryProduct = await Product.find({Category:categoryName})

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

exports.getAllProduct = async (req, res) => {
    try{

        const products = await Product.find().sort({Category: -1})

        if (!products) {
            console.log("products not found")
            return res.status(404).json({
                success: false,
                message: "products not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: products
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}