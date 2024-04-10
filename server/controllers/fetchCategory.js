const Category = require("../models/Category")

exports.getAllCategories = async (req, res) => {
    try{
        console.log("I am inside getAllCategories")
        const allCategories = await Category.find({})
        console.log("printing all categories", allCategories)
        return res.status(200).json({
            success: true,
            data: allCategories
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
