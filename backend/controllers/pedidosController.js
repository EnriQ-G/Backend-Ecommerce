const asyncHandler = require('express-async-handler');
const Pedido = require('../models/pedidoModel');
const Product = require('../models/productModel');

const getPedidos = asyncHandler(async(req,res)=>{
    const pedidos = await Pedido.find({user: req.user.id});
    res.json(pedidos);
})

const getPedidoById = asyncHandler(async(req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    if(pedido){
        res.json(pedido);
    }else{
        res.status(404);
        throw new Error('Pedido no encontrado');
    }
})

const setPedido = asyncHandler(async(req,res)=>{
    if(!req.body.name || !req.body.id || !req.body.qty){
        res.status(400);
        throw new Error('Es necesario ingresar todos los datos');
    }
    const pedido = await Pedido.create({
        user: req.user.id,
        name: req.body.name,
        id: req.body.id,
        qty: req.body.qty
    })
    if(pedido){
        product = await Product.findById(req.body.id);

        if (!product) {
            res.status(404);
            throw new Error('Producto no encontrado');
        } else {
            const newStock = Math.max(0, product.stock - req.body.qty);
            const updatedProduct = await Product.findByIdAndUpdate( //find({name: req.body.name})
                req.body.id,
                { $set: { stock: newStock } },
                { new: true }
            );   
            res.json({ message1: 'Pedido creado correctamente', pedido, message:'Stock actualizado correctamente', updatedProduct  });
        }
    }
})

const deletePedido = asyncHandler(async(req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    if(pedido){
        await pedido.deleteOne();
        res.json({message: 'Pedido eliminado'});
    }else{
        res.status(404);
        throw new Error('Pedido no encontrado');
    }
})

const updatePedido = asyncHandler(async(req,res)=>{
    const pedido = await Pedido.findById(req.params.id);
    if(!pedido){
        res.status(404);
        throw new Error('Pedido no encontrado');
    }else{
        const updatedPedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updatedPedido);
    }
})

module.exports = {
    getPedidos,
    getPedidoById,
    setPedido,
    deletePedido,
    updatePedido
}
