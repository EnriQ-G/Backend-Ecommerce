const express = require('express')
const router = express.Router()
const { getComments, setComment, deleteComment } = require('../controllers/commentController')
const { protect } = require('../middleware/authMiddleware')

router.get('/:id', getComments)
router.post('/', protect, setComment)
router.delete('/:id', deleteComment)

module.exports = router