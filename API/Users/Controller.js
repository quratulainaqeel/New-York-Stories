require('dotenv').config()
const User = require('./Schema')
const { connect } = require('mongoose')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

const Signup = async (req, res) => {
    const { username, password, email, re_enter_password } = req.body;

    if (!username || !password || !email || !re_enter_password) {
        res.status(403).json({
            Message: "Missing Required Field"
        })
    }
    else if (password !== re_enter_password) {
        res.json({
            Message: "Password & Re-type Password not match "
        })
    }
    else {
        try {
            await connect(process.env.MONGO_URI)
            console.log("Signup DB connected")

            const userExist = await User.exists({ email: email })
            if (userExist) {
                res.json({
                    Message: "User already exist"
                })
            }
            else {
                await User.create({ username, email, password: await hash(password, 12) })

                console.log(" User Created")

                res.status(201).json(
                    {
                        Message: "SignUP SucessFully"
                    }
                )
            }

        } catch (error) {
            res.status(404).json(
                {
                    message: error.message
                }
            )
        }
    }


}

const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!password || !email) {
        res.status(403).json({
            Message: "Missing Required Field"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            console.log("Login DB connected")

            const checkuserExist = await User.findOne({ email: email })

            if (!checkuserExist) {
                res.status(404).json(
                    {
                        Message: "User Does not Exist"
                    }
                )
            }
            else {
                const decrypPassword = await compare(password, checkuserExist.password)
                console.log(decrypPassword)

                if (email == checkuserExist.email && decrypPassword) {

                    const token = sign(
                        {
                            id: checkuserExist._id,
                            username: checkuserExist.username,
                            email: checkuserExist.email                            
                        }
                        ,
                        process.env.JWT_SECRET
                    )
                    res.status(200).json(
                        {
                            Message: "Sucessfully Login",
                            token: token
                        }
                    )
                }
                else {
                    res.status(401).json(
                        {
                            Message: "Invalid Credentials"
                        }
                    )
                }
            }
        }

        catch (error) {
            res.status(404).json(
                {
                    Message: error.Message
                }
            )
        }
    }



}

module.exports = { Login, Signup}