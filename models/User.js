import mongoose from 'mongoose';

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

export default mongoose.model('user', userSchema, 'user')
