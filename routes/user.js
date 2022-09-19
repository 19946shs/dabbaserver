import express from 'express'
import { findAllUsers, addUser, findUserByGoogleAuthUID } from '../controllers/UserController.js'

const router = express.Router()

router.get('/', findAllUsers)
router.post('/add-user', addUser)
router.get('/user/:id', findUserByGoogleAuthUID)

export default router
