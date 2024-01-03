require('dotenv').config()
const User = require('./Schema')
const { connect } = require('mongoose')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

const Signup = async (req, res) => {
    const { username, password, email, re_enter_password } = req.body;

    if (!username || !password || !email || !re_enter_password) {
        res.status(403).json({
            message: "Missing Required Field"
        })
    }
    else if (password !== re_enter_password) {
        res.status(403).json({
            message: "Passwords do not match"
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
            message: "Missing Required Field"
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
                    message: error.message
                }
            )
        }
    }



}

const getAllUser = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        console.log(" getAllUser DB connected")
        const alluser = await User.find()
        res.json(
            {
                User: alluser
            }
        )
    }

    catch (error) {
        res.status(404).json(
            {
                message: error.message
            }
        )
    }
}

const getUserById = async (req, res) => {

    const { _id } = req.query

    try {
        await connect(process.env.MONGO_URI)
        console.log("getUserById DB connected")

        const userbyid = await User.findOne({ _id })

        res.json(
            {
                User: userbyid
            }
        )

    } catch (error) {
        res.status(404).json(
            {
                message: error.message
            }
        )
    }
}

const getuserbyEmail = async (req, res) => {
    const { email } = req.query

    try {
        await connect(process.env.MONGO_URI)
        console.log("getuserbyEmail DB connected")

        const userbyemail = await User.findOne({ email })

        res.json(
            {
                User: userbyemail
            }
        )

    } catch (error) {
        res.status(404).json(
            {
                message: error.message
            }
        )
    }
}

module.exports = { Login, Signup, getAllUser, getUserById, getuserbyEmail}