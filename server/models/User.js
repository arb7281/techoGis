const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        location:{
            type: String,
            required: true,
            trim: true
        },
        companyName:{
            type: String,
            required: true,
            trim: true
        },
        phoneNumber:{
            type: Number,
            required: true,
        },
        email:{
            type:String,
            required: true,
            trim: true
        },
        password:{
            type: String,
            required: true
        },
        token:{
            type: String
        },
        remarks:{
            type:String,
            required: true,
        }
    }
)

module.exports = mongoose.model("User", userSchema)