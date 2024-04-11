const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    Category: {
        type: String,
        required: true
    },
    Chemistry: {
        type: String,
        required: true
    },
    Process: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Product", productSchema)