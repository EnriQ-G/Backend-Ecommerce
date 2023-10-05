const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')

const getComments = asyncHandler(async (req, res) => {

    const comments = await Comment.find({ movie: req.params.id })

    res.status(200).json(comments)
})

const setComment = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error('Por favor escribe tu comentario')
    }

    const comment = await Comment.create({
        movie: req.body.movie,
        texto: req.body.texto,
        user: req.user.id
    })
    res.status(201).json(comment)
})

const deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        res.status(404);
        throw new Error('El comentario no fue encontrado');
    // }

    // if (comment.user.toString() !== req.user.id) {
    //     res.status(401);
    //     throw new Error('Usuario no autorizado');
    } else {
        await comment.deleteOne(); // Use await to properly delete the comment
        res.status(200).json({ id: comment._id });
    }
});

module.exports = {
    getComments,
    setComment,
    deleteComment
}