const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("UserList", userSchema)