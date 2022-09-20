const express = require('express');
const { findAllUsers, addUser, findUserByGoogleAuthUID } = require('../controllers/UserController.js');

const router = express.Router()

router.get('/', findAllUsers)
router.post('/add-user', addUser)
router.get('/user/:id', findUserByGoogleAuthUID)

module.exports = router
