const mongoose = require('mongoose');

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

module.exports = mongoose.model('folder', folderSchema, 'folder')
