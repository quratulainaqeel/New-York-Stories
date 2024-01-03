const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // re_enter_password: {
    //     type: String,
    // },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

const User = model('user', UserSchema)

module.exports = User