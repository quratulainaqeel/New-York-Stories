const express = require('express')
const Router = express.Router()
const {Login, Signup,  getAllUser, getUserById, getuserbyEmail} = require('./Controller')

Router.post('/login', Login)
Router.post('/signup', Signup)

module.exports = Router