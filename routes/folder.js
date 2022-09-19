import express from 'express'
import { findFolderById, updateFolder } from '../controllers/FolderController.js'

const router = express.Router()

router.get('/:id', findFolderById)
router.patch('/update-folder', updateFolder)

export default router
