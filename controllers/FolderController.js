import Folder from '../models/Folder.js';

export const findHomeFolder = (req, res, next) => {
    Folder.find({
    })
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: `Error occored: ${error}`
            })
        })
}

export const findFolderById = (req, res, next) => {
    let id = req.params.id
    Folder.find({ id })
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: `Error occored: ${error}`
            })
        })
}

export const createFolder = async (req, res, next) => {
    const latestFolder = await Folder.find().limit(1).sort({$natural:-1})
    let folder = new Folder({
        id: latestFolder[0].id + 1,
        name: req.body.name,
        files: [],
        folders: []
    })
    folder.save()
        .then(response => {
            res.json({
                message: 'Folder created'
            })
        })
        .catch(error => {
            res.json({
                message: `Error occored: ${error}`
            })
        })
}

export const updateFolder = async (req, res, next) => {
    Folder.findOneAndUpdate({ id: req.body.id }, req.body.data)
        .then(response => {
            res.json({
                message: 'Folder updated'
            })
        })
        .catch(error => {
            res.json({
                message: `Error occored: ${error}`
            })
        })
}


