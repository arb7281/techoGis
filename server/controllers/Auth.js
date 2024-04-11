const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const mailSender = require("../utils/mailSender")
const {passwordEmail} = require("../mail/passwordEmail")


exports.signup = async (req, res) => {
    try{
        const {
            name,
            companyName,
            location,
            phoneNumber,
            email,
            remarks
        } = req.body

        if(!name || 
           !companyName || 
           !location || 
           !phoneNumber ||
           !email){
            return res.status(403).send({
                success: false,
                message: "All Fields are required"
            })
           }

           const  existingUser = await User.findOne({email})
           if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User alredy exist"
            })
           }

           //password generation
           function generatePassword(length) {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            return password;
        }
        
        const password = generatePassword(6);
        //hash passhword using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)

        //send email with password to user
        const emailResponse = await mailSender(
            email,
            `Password generated successfully`,
            passwordEmail(password)
        );

        const user = await User.create({
			name,
			companyName,
			location,
			phoneNumber,
			password: hashedPassword,
			email,
			remarks: remarks ? remarks : "",
		});

        return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
    }catch(error){
        console.error(error)
        return res.status(500).json({
            success: false,
            meddage: "User cannot be registered."
        })
    }

}

exports.login = async (req, res) =>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill the required details"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not registered"
            })
        }

        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                {email: user.email, id: user._id},
                process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            })

            user.token = token
            user.password = undefined

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `Login Successfull`
            })
        }else{
            return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
        } 
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Login Failed"
        })
    }
}