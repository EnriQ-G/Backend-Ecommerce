const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({	
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    pedidoItems: [
        {
            name: {type: String, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            qty: {type: Number, required: true}
        }
    ],
}, {
    timestamps: true
})

module.exports = mongoose.model('Pedido', pedidoSchema);



