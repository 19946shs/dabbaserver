const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    googleAuthUID: {
        type: String
    },
    name: {
        type: String
    },
    homeFolder: {
        type: Number
    }
}, { collection : 'dabba' })

module.exports = mongoose.model('user', userSchema, 'user')
