import mongoose from 'mongoose';

const Schema = mongoose.Schema

const folderSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String
    },
    files: {
        type: Array
    },
    folders: {
        type: Array
    }
}, { collection : 'dabba' })

export default mongoose.model('folder', folderSchema, 'folder')
