const express = require('express')
const router = express.Router()
const { getComments, setComment, deleteComment } = require('../controllers/commentController')
const { protect } = require('../middleware/authMiddleware')

router.get('/:id', protect, getComments)
router.post('/', setComment)
router.delete('/:id', deleteComment)

module.exports = router