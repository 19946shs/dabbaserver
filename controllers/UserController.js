const User = require('../models/User');
const Folder = require('../models/Folder');

module.exports = {

    findAllUsers: (req, res, next) => {
        User.find()
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
    },

    findUserByGoogleAuthUID: (req, res, next) => {
        let googleAuthUID = req.params.id
        User.find({ googleAuthUID })
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
    },

    addUser: async (req, res, next) => {
        const newUser = await User.find({ googleAuthUID: req.body.googleAuthUID })
        if (!newUser.length) {
            const latestFolder = await Folder.find().limit(1).sort({$natural:-1})
            const folder = new Folder({
                id: latestFolder[0].id + 1,
                name: 'root',
                files: [],
                folders: []
            })
            const newFolder = await folder.save()
            let user = new User({
                name: req.body.name,
                googleAuthUID: req.body.googleAuthUID,
                homeFolder: newFolder.id
            })
            user.save()
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
        } else {
            res.json({
                response: newUser
            })
        }
    }
}