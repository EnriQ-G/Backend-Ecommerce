const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    movie: {
        type: String,
        required: true,
        ref: 'Movie'
        },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    texto: {
        type: String,
        required: [true, 'Por favor escribe tu comentario']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)