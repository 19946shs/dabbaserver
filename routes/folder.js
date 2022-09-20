
const express = require('express');
const { findFolderById, updateFolder } = require('../controllers/FolderController.js');

const router = express.Router()

router.get('/:id', findFolderById)
router.patch('/update-folder', updateFolder)

module.exports = router
