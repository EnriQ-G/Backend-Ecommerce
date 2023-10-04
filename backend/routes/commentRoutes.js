const express = require('express')
const router = express.Router()
const { getComments, setComment, deleteComment } = require('../controllers/commentController')
const { protect } = require('../middleware/authMiddleware')

router.get('/:id', getComments)
router.post('/:id', protect, setComment)
router.delete('/:id', protect, deleteComment)

module.exports = router