const express = require('express')
const router = express.Router()
const { getComments, setComment, updateComment, deleteComment } = require('../controllers/commentController')

router.get('/', getComments)
router.post('/:id', setComment)

router.put('/:id', updateComment)
router.delete('/:id', deleteComment)

module.exports = router